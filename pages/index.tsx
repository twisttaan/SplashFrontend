import type { NextPage } from "next";
import Features from "../components/branding/Features";
import Hero from "../components/branding/Hero";
const invite =
  "https://discord.com/oauth2/authorize?client_id=807543126424158238&permissions=518855707712&scope=bot%20applications.commands";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <div className="text-5xl pt-6 pb-6 leading-none font-extrabold tracking-tight text-white text-center bg-[#23272a]">
        Why is Splash different?
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#23272a"
          fillOpacity={1}
          d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,80C672,75,768,117,864,149.3C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <section className="px-2 py-32 md:px-0">
        <Features />
      </section>
    </div>
  );
};

export default Home;
