import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { OpenGraph } from "../components/OpenGraph";
import { UserProvider } from "../context/UserProvider";
import "../styles/main.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <OpenGraph
            title="Splash"
            url="https://splash.evie.pw/"
            image="https://eviebot.rocks/assets/Banner.png"
            description="Splash brings back the main essence of social media, friends."
          />
          <div className="flex flex-col items-center justify-center">
            <Header />
          </div>
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
