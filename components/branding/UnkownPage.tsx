import Link from "next/link";

export default function UnkownPage() {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    h-screen
    w-screen
    bg-gradient-to-bl
    from-[#00aeef]
    to-[#ed1e79]
  "
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1
            className="font-bold text-blue-600 text-9xl glitch"
            data-text="404"
          >
            404
          </h1>
          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>
          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/">
            <a className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
              Go home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
