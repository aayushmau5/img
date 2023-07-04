import { Cedarville_Cursive } from "next/font/google";
import Head from "next/head";

const cedarvilleCursive = Cedarville_Cursive({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>hello world</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${cedarvilleCursive.className} text-4xl`}
      >
        Images
      </main>
    </>
  );
}
