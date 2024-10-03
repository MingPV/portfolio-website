import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="bg-dark-1  w-full h-full flex flex-row">
        <div className="text-white mt-10 w-[10vw] flex justify-center">
          <a href="/">
            <button className="bg-dark-7 text-dark-2 opacity-80 px-4 py-1 rounded-md">
              {"<"}- Back
            </button>
          </a>
        </div>

        <div className="flex flex-col gap-16 w-[80vw] px-[5vw] items-center bg-dark-2">
          <div className="text-white text-3xl pt-20">Anime Saver</div>
          <div className="text-white text-start text-md font-extralight w-full">
            This is a website where we can save anime that we want to watch but
            haven&apos;t had time for yet. We can categorize the anime as well.
            Additionally, we can view statistics on the types of anime we like
            to watch, showing us which genres we tend to watch the most.
          </div>
          <img
            src={"/images/animesaver1.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            When you&apos;ve entered the name of your anime, press the save
            button. A modal will pop up where you can enter a little message for
            you to read later. You can also select categories to classify and
            create your own statistics.
          </div>
          <img
            src={"/images/animesaver2.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            This section is a section of the menu that you can use. And there
            may be more added in the future.
          </div>
          <img
            src={"/images/animesaver3.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            This is an example of your saved anime and your and others&apos;
            viewing statistics.
          </div>
          <img
            src={"/images/animesaver4.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <img
            src={"/images/animesaver5.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full flex flex-col">
            If you want to see more details, you can visit github.
            <div className="flex flex-row items-center mt-2">
              <div className="mr-4">-{">"}</div>
              <a href="https://github.com/MingPV/AnimeSaver">
                <button className="text-dark-4 text-xs font-bold py-1 px-2 bg-dark-6 rounded-md">
                  Check the code on GitHub
                </button>
              </a>
            </div>
          </div>
          <div className="my-16"></div>
        </div>
        <div className="text-white mt-10 w-[10vw]"></div>
      </div>
    </>
  );
}
