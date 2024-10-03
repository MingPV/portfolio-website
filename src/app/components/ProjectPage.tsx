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
          <div className="w-full text-center text-dark-6 text-3xl mt-[15vh]">
            Successful Projects I'm Proud Of
          </div>
          <div className="w-full text-center text-dark-5 text-md mt-[4vh] mb-[5vh]">
            No better way to get experience than real-life projects
          </div>

          <div className="pl-[4vw] mt-[10vh] w-full flex justify-start overflow-hidden">
            <ScrollReveal animationDirection="left">
              <div className="flex flex-row items-center">
                <div className="">
                  <img
                    src={"/images/Game1.png"}
                    alt="Description"
                    className="w-[35vw]"
                  />
                </div>
                <div className="bg-dark-1 border border-dark-4  h-auto w-[40vw] relative left-[10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">
                      Coffee Man Game
                    </div>
                    <div className=" text-dark-6 text-start">
                      Here is a project that my friend and I are working on
                      together. The game is written in Java, and I think it's
                      quite fun to play.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      <a href="/Projects/coffeeman">
                        <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                          MORE DETAILS
                        </button>
                      </a>
                      <a href="https://github.com/MingPV/StickmanGameProject">
                        <button className="bg-dark-3 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                          CHECK CODE
                        </button>
                      </a>
                    </div>
                    <div className="flex flex-row mt-4">
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        Java
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="pr-[4vw] mt-[10vh] w-full flex justify-end overflow-hidden">
            <ScrollReveal animationDirection="right">
              <div className="flex flex-row items-center">
                <div className="bg-dark-1 border border-dark-4 h-auto w-[40vw] relative right-[10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">Anime saver</div>
                    <div className=" text-dark-6 text-start">
                      This is a website where we can save anime that we want to
                      watch but haven't had time for yet. We can categorize the
                      anime as well. Additionally, we can view statistics on the
                      types of anime we like to watch, showing us which genres
                      we tend to watch the most.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      <a href="/Projects/animesaver">
                        <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                          MORE DETAILS
                        </button>
                      </a>
                      <a href="https://github.com/MingPV/AnimeSaver">
                        <button className="bg-dark-3 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                          CHECK CODE
                        </button>
                      </a>
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        React
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        TypeScript
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        MongoDB
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={"/images/Work4.png"}
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
                    src={"/images/Work2.png"}
                    alt="Description"
                    className="w-[35vw]"
                  />
                </div>
                <div className="bg-dark-1 border border-dark-4  h-auto w-[40vw] relative left-[10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">
                      mycourseville-cvtqf7
                    </div>
                    <div className=" text-dark-6 text-start">
                      Here is a part of the university website I worked on
                      during the summer. The section I developed is for teachers
                      to evaluate courses from the previous semester. It is
                      integrated with a database.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      <a href="/Projects/mycourseville">
                        <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                          MORE DETAILS
                        </button>
                      </a>
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        HTML
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        CSS
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        JavaScript
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        Jquery
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        PHP
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        MySQL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="pr-[4vw] mt-[10vh] w-full flex justify-end overflow-hidden">
            <ScrollReveal animationDirection="right">
              <div className="flex flex-row items-center">
                <div className="bg-dark-1 border border-dark-4  h-auto w-[40vw] relative right-[10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">
                      mind-space-plus
                    </div>
                    <div className=" text-dark-6 text-start">
                      This is a component of the university's mental health care
                      website, serving as a basic user guide for the website.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      {/* <a href="/Projects/mindspace">
                        <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                          MORE DETAILS
                        </button>
                      </a> */}
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        Nextjs
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        TypeScript
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        Tailwind
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={"/images/Work1.png"}
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
                    src={"/images/Game2.png"}
                    alt="Description"
                    className="w-[35vw]"
                  />
                </div>
                <div className="bg-dark-1 border border-dark-4  h-auto w-[40vw] relative left-[10vw] rounded-xl ">
                  <div className=" h-full my-[4vh] mx-[2vw] flex flex-col">
                    <div className="my-2 text-2xl text-dark-6">UNO Website</div>
                    <div className=" text-dark-6 text-start">
                      Here is the web game project that I worked on with my
                      friends. We only used HTML, CSS, and JavaScript, and
                      hardly any frameworks, allowing us to fully utilize the
                      fundamentals.
                    </div>
                    <div className="mt-4 flex flex-row gap-3">
                      <a href="/files/uno.pdf" download>
                        <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                          MORE DETAILS
                        </button>
                      </a>
                      <a href="https://github.com/MingPV/FinalProject">
                        <button className="bg-dark-3 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
                          CHECK CODE
                        </button>
                      </a>
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        HTML
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        CSS
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        JavaScript
                      </div>
                      <div className="text-xs border rounded-lg px-3 py-1 bg-cyan-700 text-white">
                        MongoDB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
