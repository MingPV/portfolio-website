"use client";

import ImageShadow from "react-image-shadow";
import ScrollReveal from "./ScollReveal";

export default function ProjectPage() {
  return (
    <>
      <div className="bg-dark-1  w-screen flex flex-col justify-center pb-[10vh]">
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-center">
            <hr className="border border-dark-3 w-[80vw]" />
          </div>
          <div className="w-full text-center text-dark-6 text-5xl mt-[15vh]">
            Successful Projects I'm Proud Of
          </div>
          <div className="w-full text-center text-dark-5 text-lg mt-[4vh] mb-[5vh]">
            No better way to get experience than real-life projects
          </div>

          <div className="pl-[4vw] mt-[10vh] w-full flex justify-start overflow-hidden">
            <ScrollReveal animationDirection="left">
              <div className="flex flex-row items-center">
                <div className="">
                  <img
                    src={"/images/testImage1.jpg"}
                    alt="Description"
                    className="w-[35vw]"
                  />
                </div>
                <div className="bg-dark-3 h-[30vh] w-[40vw] relative left-[-10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">item1</div>
                    <div className=" text-dark-6 text-start">
                      The owners of Zekra realized that social media isn't
                      enough, since they aren't getting enough sales. Our web
                      solution certainly helped them grow online.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                        LIVE SITE
                      </button>
                      <button className="bg-dark-3 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                        CHECK CODE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="pr-[4vw] mt-[10vh] w-full flex justify-end overflow-hidden">
            <ScrollReveal animationDirection="right">
              <div className="flex flex-row items-center">
                <div className="bg-dark-3 h-[30vh] w-[40vw] relative right-[-10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">item1</div>
                    <div className=" text-dark-6 text-start">
                      The owners of Zekra realized that social media isn't
                      enough, since they aren't getting enough sales. Our web
                      solution certainly helped them grow online.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                        LIVE SITE
                      </button>
                      <button className="bg-dark-3 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                        CHECK CODE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={"/images/testImage1.jpg"}
                    alt="Description"
                    className="w-[35vw]"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="pl-[4vw] mt-[10vh] w-full flex justify-start overflow-hidden">
            <ScrollReveal animationDirection="left">
              <div className="flex flex-row items-center">
                <div className="">
                  <img
                    src={"/images/testImage1.jpg"}
                    alt="Description"
                    className="w-[35vw]"
                  />
                </div>
                <div className="bg-dark-3 h-[30vh] w-[40vw] relative left-[-10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">item1</div>
                    <div className=" text-dark-6 text-start">
                      The owners of Zekra realized that social media isn't
                      enough, since they aren't getting enough sales. Our web
                      solution certainly helped them grow online.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                        LIVE SITE
                      </button>
                      <button className="bg-dark-3 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                        CHECK CODE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="pr-[4vw] mt-[10vh] w-full flex justify-end overflow-hidden">
            <ScrollReveal animationDirection="right">
              <div className="flex flex-row items-center">
                <div className="bg-dark-3 h-[30vh] w-[40vw] relative right-[-10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">item1</div>
                    <div className=" text-dark-6 text-start">
                      The owners of Zekra realized that social media isn't
                      enough, since they aren't getting enough sales. Our web
                      solution certainly helped them grow online.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                        LIVE SITE
                      </button>
                      <button className="bg-dark-3 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                        CHECK CODE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={"/images/testImage1.jpg"}
                    alt="Description"
                    className="w-[35vw]"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* <div className="flex flex-row">
          <ScrollReveal animationDirection="left">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <p className="text-2xl">Hello, I am revealed from the left!</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animationDirection="right">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <p className="text-2xl">Hello, I am revealed from the right!</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animationDirection="up">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <p className="text-2xl">Hello, I am revealed from the top!</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animationDirection="down">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <p className="text-2xl">Hello, I am revealed from the bottom!</p>
            </div>
          </ScrollReveal>
        </div> */}
      </div>
    </>
  );
}
