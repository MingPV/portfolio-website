"use client";

import HomePicture from "../components/HomePicture";
import Navbar from "../components/Navbar";
import TextHome from "../components/TextHome";

export default function HomePage() {
  return (
    <>
      <div className="bg-dark-1  w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <div className="mt-24">
            <TextHome />
          </div>
          <div className="ml-36">
            <HomePicture />
          </div>
        </div>
      </div>
    </>
  );
}
