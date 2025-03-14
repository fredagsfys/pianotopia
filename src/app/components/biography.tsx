import Image from "next/image";

export default function Biography() {
  return (
    <section>
      <div className="bg-primary text-white relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center lg:px-24 container mx-auto px-4 text-justify">
          <Image
            src="/suzana.jpg"
            alt="person"
            width={500}
            height={500}
            className="rounded-2xl relative w-full object-cover aspect-video object-top lg:object-fill lg:aspect-auto lg:w-72 -my-4 lg:-my-4 mb-24"
          />
          <div className="relative">
            <div className="relative z-10">
              <p className="text-lg sm:text-2xl mb-8">
                Att kliva in i en musikalisk värld där tid och rum försvinner är
                magiskt – att spela piano ska vara roligt, lärorikt och
                meningsfullt, men ibland också härligt knasigt!
              </p>
              <p className="font-bold">Suzana Spasevska Hermansen</p>

              <p className="text-gray-400 mb-12 lg:mb-0">
                VD och pianolärare på Pianotopia
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 162 128"
              strokeWidth="1"
              className="w-24 sm:w-36 absolute -top-6 sm:-top-10 fill-primary stroke-gray-600"
            >
              <path
                d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
              ></path>
              <use x="86" href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="px-4 max-w-xl mx-auto text-center space-y-4 mt-12">
        <h2 className="text-4xl font-display font-bold mb-6">Hej där! 👋</h2>
        <p className="text-lg text-justify">
          Mitt namn är Suzana Spasevska Hermansen och det är jag som driver
          Pianotopia. Med mer än 10 års erfarenhet av både pedagogisk verksamhet
          inom kommunal skola och kulturskola samt som frilansande pianist har
          jag haft privilegiet att hjälpa många ungdomar att upptäcka magin i
          att spela piano. Min musikaliska bakgrund sträcker sig över flera
          genrer, vilket gör det möjligt för mig att skräddarsy undervisningen
          efter mina elevers intressen och mål. Oavsett om ditt barn vill spela
          svängiga pop och jazzlåtar, klassiska mästerverk eller stämningsfull
          filmmusik så hjälper jag ditt barn att utveckla teknik, uttryck och
          respekt för musiken.
        </p>
        <p className="text-lg text-justify">
          Min musikaliska resa började med klassisk musik redan vid 6 års åldern
          för att senare under min ungdomstid upptäcka pop/rock och jazz. Vidare
          upptäckte jag magin i filmmusiken och euforin av att uppträda med
          fantastiska musiker. Med en lärarutbildning i bagaget så har jag en
          stadig pedagogisk grund men också en ständig törst efter utvecklande
          och engagerande pedagogiska metoder. Allt för att fler och fler barn
          ska upptäcka de fina fördelarna med att skapa musik och framförallt
          den positiva påverkan pianospelandet i synnerhet kan ha på en persons
          allmänna mående.
        </p>
      </div>
    </section>
  );
}
