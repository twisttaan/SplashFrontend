import type { AppProps } from "next/app";
import Head from "next/head";
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

          <OpenGraph title="Splash" url="https://splash.evie.pw/" image="https://eviebot.rocks/assets/Banner.png"
            description="Splash brings back the main essence of social media, friends." color="#7289DA" />

          <Head>

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/icons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/icons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/icons/favicon-16x16.png"
            />
            <link rel="manifest" href="/icons/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/icons/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            <meta name="apple-mobile-web-app-title" content="Evie" />
            <meta name="application-name" content="Evie" />
            <meta name="msapplication-TileColor" content="#9f00a7" />
            <meta
              name="msapplication-config"
              content="/icons/browserconfig.xml"
            />
            <meta name="theme-color" content="#ffffff" />
          </Head>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
