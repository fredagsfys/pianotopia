// Post-build step: start downloading Next.js's JS chunks only after the
// above-the-fold images have painted.
//
// The page is fully rendered HTML, so the JS only adds interactivity. When it
// is requested up front, ~135 KB of chunks compete with the logo and video
// poster for bandwidth on slow connections. Instead, wait until every
// fetchpriority="high" image has loaded and decoded, give the browser two
// frames to paint it, then inject the same <script async> tags. A timeout guarantees
// hydration even if an image never settles.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";
const FALLBACK_MS = 3000;
const CHUNK_SCRIPT =
  /<script src="(\/_next\/static\/chunks\/[^"]+\.js)"(?: id="([^"]+)")? async=""><\/script>/g;

const loader = (scripts) =>
  `<script>(function(){var s=${JSON.stringify(scripts)},d=0;` +
  `function go(){if(d++)return;s.forEach(function(x){var e=document.createElement("script");e.src=x[0];if(x[1])e.id=x[1];e.async=true;document.head.appendChild(e)})}` +
  `var i=[].slice.call(document.querySelectorAll('img[fetchpriority="high"]')),n=i.length;` +
  `function one(){if(--n<=0)requestAnimationFrame(function(){requestAnimationFrame(go)})}` +
  `if(!n)one();i.forEach(function(e){e.decode().then(one,one)});` +
  `setTimeout(go,${FALLBACK_MS})})()</script>`;

const files = (await readdir(OUT, { recursive: true })).filter((f) =>
  f.endsWith(".html"),
);

for (const file of files) {
  const path = join(OUT, file);
  const html = await readFile(path, "utf8");
  const scripts = [...html.matchAll(CHUNK_SCRIPT)].map(([, src, id]) =>
    id ? [src, id] : [src],
  );

  // Leave the page as Next built it if its markup ever changes shape
  if (!scripts.length || !html.includes("</body>")) {
    console.warn(`defer-hydration: no chunk scripts found in ${file}, skipped`);
    continue;
  }

  const stripped = html.replace(CHUNK_SCRIPT, "");
  const end = stripped.lastIndexOf("</body>");
  await writeFile(
    path,
    stripped.slice(0, end) + loader(scripts) + stripped.slice(end),
  );
  console.log(`defer-hydration: ${file} (${scripts.length} scripts)`);
}
