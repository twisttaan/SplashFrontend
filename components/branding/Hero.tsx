export default function Hero() {
  return (
    <div className="grid justify-items-stretch pt-16 pb-16">
      <div className="justify-self-center ...">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mt-10 mb-8 sm:mt-14 sm:mb-10 text-white text-center">
          <span className="text-transparent text-7xl bg-clip-text bg-gradient-to-tr from-[#0011ff] to-[#00aeff] hover:text-[#ffffff] transition-all">
            Splash
          </span>{" "}
          into the{" "}
          <span className="text-transparent text-7xl bg-clip-text bg-gradient-to-tr from-[#8400ff] to-[#ff00d4] drop-shadow hover:text-[#ffffff] hover:text-9xl transition-all">
            future
          </span>{" "}
          of social media.
        </h1>
        <div className="justify-self-center ...">
          <p className="text-white text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-center">
            Splash brings back the main{" "}
            <span className="text-transparent text-1xl bg-clip-text bg-gradient-to-tr from-[#0011ff] to-[#00aeff] hover:text-[#ffffff] transition-all">
              essence
            </span>{" "}
            of social media,{" "}
            <span className="text-transparent text-1xl bg-clip-text bg-gradient-to-tr from-[#8400ff] to-[#ff00d4] drop-shadow hover:text-[#ffffff] hover:text-3xl transition-all">
              friends.
            </span>{" "}
          </p>
          <div className="grid justify-items-stretch ...">
            <div className="justify-self-center ...">
              <div className="transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-550...">
                <div className="hover: transition duration-500 hover:scale-125"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
