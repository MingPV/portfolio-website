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
          <div className="text-white text-3xl pt-20">
            Chess Detection with YOLOv8
          </div>
          <div className="text-white text-start text-md font-extralight w-full">
            My website is a sleek and minimalistic real-time chat application
            designed for seamless communication. Built with Next.js and powered
            by Supabase
          </div>
          <img
            src={"/images/mingchat1.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="flex flex-col text-white text-start text-md font-extralight w-full">
            <div>
              it offers a straightforward user experience focusing on two key
              features:
            </div>
            <div>
              1. Friend Management: Easily add and manage friends to build your
              personal network.
            </div>
            <div>
              2. Real-Time Chat: Engage in instant, real-time conversations with
              your friends without interruptions.
            </div>
            <div>
              With a modern tech stack, including PostgreSQL for data storage
              and Tailwind CSS for a polished design, this platform is optimized
              for speed, reliability, and user-friendly interaction. It's a
              simple yet powerful solution for staying connected.
            </div>
          </div>
          <img
            src={"/images/mingchat3.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <img
            src={"/images/mingchat4.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <img
            src={"/images/mingchat7.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            We also have a Authentication system and users can set their name,
            and the name cannot be duplicated by anyone else.
          </div>
          <img
            src={"/images/mingchat2.png"}
            alt="Description"
            className="w-[35vw]"
          />

          <div className="text-white text-start text-md font-extralight w-full flex flex-col">
            If you want to see more details here is the github of the project.
            <div className="flex flex-row items-center mt-2">
              <div className="mr-4">-{">"}</div>
              <a href="https://github.com/MingPV/MingChat">
                <button className="text-dark-4 text-xs font-bold py-1 px-2 bg-dark-6 rounded-md">
                  Go to github
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
