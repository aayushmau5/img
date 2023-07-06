import Head from "next/head";
import { images } from "../../data/images";
import Image from "next/image";
import { useState } from "react";

type ImageZoomData = {
  link: string;
  description: string;
};

function ImageZoom({
  onClose,
  imageData,
}: {
  onClose: () => void;
  imageData: ImageZoomData;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70" onClick={onClose}>
      <button className="absolute right-4 top-3" onClick={onClose}>
        <svg
          width={"2rem"}
          height={"auto"}
          className="align-middle"
          fill="#fff"
          viewBox="0 0 1024 1024"
        >
          <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
        </svg>
      </button>
      <div className="p-4 lg:p-8 w-auto h-full flex justify-center items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="max-w-full max-h-full"
          src={imageData.link}
          alt={imageData.description}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [zoomedImage, setZoomedImage] = useState<ImageZoomData | null>(null);

  function closeImageZoom() {
    setZoomedImage(null);
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>Photographs | aayushsahu.com</title>
      </Head>
      <h1 className="mt-4 mb-6 text-3xl text-center">Photographs</h1>
      <ul className="flex flex-wrap gap-4 justify-center">
        {images.map((imageInfo, index) => (
          <li key={index} className="relative w-[400px] break-words">
            <Image
              width={400}
              height={500}
              src={imageInfo.imageUrl}
              alt={imageInfo.description}
              className="transition-all hover:scale-[1.03] cursor-pointer"
              onClick={() =>
                setZoomedImage({
                  link: imageInfo.imageUrl,
                  description: imageInfo.description,
                })
              }
            />
            <div className="text-2xl mt-2">{imageInfo.description}</div>
            {imageInfo.date ? (
              <div className="text-2xl mt-2">{imageInfo.date}</div>
            ) : null}
          </li>
        ))}
      </ul>
      {zoomedImage ? (
        <ImageZoom onClose={closeImageZoom} imageData={zoomedImage} />
      ) : null}
      <footer className="text-center text-2xl mt-10 mb-5">
        CC |{" "}
        <a
          className="opacity-40 hover:opacity-70"
          href="https://aayushsahu.com"
          target="_blank"
          rel="noreferrer"
        >
          aayushsahu.com
        </a>
      </footer>
    </div>
  );
}
