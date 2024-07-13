import React from "react";

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  footRef: React.RefObject<HTMLDivElement>;
}

export default function navbar({
  homeRef,
  projectRef,
  educationRef,
  contactRef,
  footRef,
}: NavbarProps) {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center h-16 fixed w-[100vw] bg-opacity-95 bg-dark-1 z-50">
      <a href="/" className="flex items-center justify-center">
        {/* <img
            className="h-16"
            src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png"
            alt=""
          /> */}
        <span className="ml-4 uppercase font-black text-white">MingPV</span>
      </a>
      <nav className="contents font-light text-base lg:text-sm">
        <ul className=" flex items-center">
          <li className="p-5 xl:p-8 active">
            <a href="/">
              <span className="text-white">Home</span>
            </a>
          </li>
          <li className="p-5 xl:p-8">
            <button
              onClick={() => {
                scrollToSection(footRef);
              }}
            >
              <span className="text-white">About</span>
            </button>
          </li>
          <li className="p-5 xl:p-8">
            <button
              onClick={() => {
                scrollToSection(projectRef);
              }}
            >
              <span className="text-white">Projects</span>
            </button>
          </li>
          <li className="p-5 xl:p-8">
            <button
              onClick={() => {
                scrollToSection(educationRef);
              }}
            >
              <span className="text-white">Education</span>
            </button>
          </li>
          <li className="p-5 xl:p-8">
            <button
              onClick={() => {
                scrollToSection(contactRef);
              }}
            >
              <span className="text-white">Contact</span>
            </button>
          </li>
        </ul>
        <button
          onClick={() => {
            scrollToSection(contactRef);
          }}
          className="border border-white rounded-full font-medium text-white px-8 py-2"
        >
          Contact me
        </button>
      </nav>
    </div>
  );
}
