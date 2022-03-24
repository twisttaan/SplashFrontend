import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <section className="w-full px-8 text-gray-700 bg-[#23272a]">
          <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <div className="relative flex flex-col md:flex-row">
              <Link href="/">
                <a>
                  <h1 className="text-3xl text-[#FFFFFF] font-bold tracking-tight text-center hover:text-[#7289DA] hover:scale-110 transition-all duration-200 ease-in-out">
                    <Image
                      width={50}
                      height={50}
                      alt="Splash S Logo"
                      src="/assets/SplashLetter.svg"
                      className="w-4 h-4 align-bottom object-contain"
                    />{" "}
                    <span className="-ml-3">plash</span>
                  </h1>
                </a>
              </Link>
            </div>
            <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
              <a
                href="#"
                className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
              >
                Sign in
              </a>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
