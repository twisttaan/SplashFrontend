import Image from "next/image";

const features = [
  {
    title: (
      <>
        <span className="block text-indigo-600 xl:inline"> No Magic </span>
        <span className="block xl:inline"> Algorithms</span>
      </>
    ),
    description: `Splash focuses on connecting you with your friends and family,
    forget about advertising and "influencers".`,
    image: {
      url: "https://dummyimage.com/1071x695/000000/fff",
      alt: "Placeholder"
    }
  }
];

export default function Features() {
  return (
    <>
      {" "}
      {features.map((feature) => (
        <div
          key={features.indexOf(feature)}
          className="container items-center max-w-6xl px-8 mx-auto xl:px-5"
        >
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {feature.title}
                </h1>
                <p className="mx-auto text-base text-gray-400 sm:max-w-md lg:text-xl md:max-w-3xl">
                  {feature.description}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-blurple sm:rounded-xl">
                <Image
                  src={feature.image.url}
                  width={1071}
                  height={695}
                  alt={feature.image.alt}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
