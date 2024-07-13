"use client";

import ScrollReveal from "./ScollReveal";
import VerticalLine from "./VerticalLine";

export default function EducationPage() {
  return (
    <>
      <div className="bg-dark-1  w-screen py-[10vh] flex flex-col items-center">
        <div className="flex flex-col w-full">
          <div className="text-white text-5xl font-serif text-center mb-[5vh] mt-[5vh]">
            Education
          </div>
          <div className="flex flex-col h-[80vh] w-full items-center pt-[5vh]">
            <div className="absolute h-[70vh]">
              <VerticalLine />
            </div>

            <div className="w-full  mt-5">
              <ScrollReveal animationDirection="down">
                <div className="flex flex-row w-full">
                  <div className="flex-1 mb-14  flex flex-col items-end">
                    <div className="my-2 mr-12 text-lg text-dark-6">
                      Bachelor's degree
                    </div>
                    <div className="my-2 mr-12 text-base text-dark-6">
                      Chulalongkorn University
                    </div>
                    <div className="my-2 mr-12 text-sm text-dark-5">
                      Computer Engineering
                    </div>
                  </div>
                  <div className="flex-1 mt-2 flex flex-row justify-start">
                    <div className="text-dark-5">___</div>
                    <div className="ml-8 h-10 border border-dark-5 text-dark-5 rounded-md px-4 flex justify-center items-center">
                      Currently studying
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animationDirection="down">
                <div className="flex flex-row w-full">
                  <div className="flex-1 mt-2 flex flex-row justify-end">
                    <div className="mr-8 h-10 border border-dark-5 text-dark-5 rounded-md px-4 flex justify-center items-center">
                      May - 2022
                    </div>
                    <div className="text-dark-5">___</div>
                  </div>
                  <div className="flex-1 mb-14  flex flex-col items-start">
                    <div className="my-2 ml-12 text-lg text-dark-6">
                      Senior High School
                    </div>
                    <div className="my-2 ml-12 text-base text-dark-6">
                      Chonrassadornumrung School
                    </div>
                    <div className="my-2 ml-12 text-sm text-dark-5">
                      Eastern Economic Corridor : EEC (Pre-Engineering)
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animationDirection="down">
                <div className="flex flex-row w-full">
                  <div className="flex-1 mb-14  flex flex-col items-end">
                    <div className="my-2 mr-12 text-lg text-dark-6">
                      Junior High School
                    </div>
                    <div className="my-2 mr-12 text-base text-dark-6">
                      Chonrassadornumrung School
                    </div>
                    <div className="my-2 mr-12 text-sm text-dark-5">
                      Regular Program
                    </div>
                  </div>
                  <div className="flex-1 mt-2 flex flex-row justify-start">
                    <div className="text-dark-5">___</div>
                    <div className="ml-8 h-10 border border-dark-5 text-dark-5 rounded-md px-4 flex justify-center items-center">
                      May - 2019
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="pt-[5vh] w-full flex justify-center">
            <button className="bg-dark-2 hover:bg-dark-4 px-4 py-2 rounded-md text-dark-6 font-light text-xs">
              About Me -{">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
