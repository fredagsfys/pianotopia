// Lucide's Facebook and Instagram icons, inlined so the icon library isn't
// shipped for two SVGs
const Facebook = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-facebook ${className}`}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-instagram ${className}`}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/profile.php?id=61572401620065&sk=about",
      label: "Facebook",
      className: "text-[#4267B2]/80 hover:text-[#4267B2]", // Muted Facebook blue
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/pianotopia_kalmar",
      label: "Instagram",
      className: "text-[#E1306C]/80 hover:text-[#E1306C]", // Muted Instagram pink
    },
    // {
    //   icon: Twitter,
    //   href: "https://twitter.com",
    //   label: "Twitter",
    //   className: "text-[#1DA1F2]/80 hover:text-[#1DA1F2]", // Muted Twitter blue
    // },
    // {
    //   icon: Youtube,
    //   href: "https://youtube.com",
    //   label: "Youtube",
    //   className: "text-[#FF0000]/80 hover:text-[#FF0000]", // Muted YouTube red
    // },
    // {
    //   icon: Linkedin,
    //   href: "https://linkedin.com",
    //   label: "LinkedIn",
    //   className: "text-[#0A66C2]/80 hover:text-[#0A66C2]", // Muted LinkedIn blue
    // },
  ];

  return (
    <footer className="w-full pb-8 mt-auto bg-primary">
      <hr className="h-px mb-8 bg-gray-800 border-0" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-6 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 ease-in-out"
                aria-label={social.label}
              >
                <social.icon
                  className={`w-6 h-6 transition-colors ${social.className}`}
                />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-200">
            {new Date().getFullYear()} Pianotopia. | Följ oss gärna på sociala
            medier.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
