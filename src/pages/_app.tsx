import "@/styles/globals.css";
import { Cedarville_Cursive } from "next/font/google";
import type { AppProps } from "next/app";

const cedarvilleCursive = Cedarville_Cursive({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${cedarvilleCursive.className} bg-black bg-opacity-90 text-white p-4`}
    >
      <Component {...pageProps} />
    </main>
  );
}
