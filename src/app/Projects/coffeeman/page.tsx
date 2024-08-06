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
          <div className="text-white text-3xl pt-20">Coffee Man</div>
          <div className="text-white text-start text-md font-extralight w-full">
            Here is a project that my friend and I are working on together. The
            game is written in Java, and I think it's quite fun to play.We made
            this game because it's based on the games I used to enjoy, and it's
            something I've always wished to play. Therefore, We took the
            initiative to develop it on our own.
          </div>
          <img
            src={"/images/coffeeman5.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            Enter Player's name and select the character, then click the button
            PLAY use 'A', 'S', 'D', 'W' to control the direction of the
            character. When you move to area that has monsters, the monster will
            approach you and attack. You need to battle with the monster by
            pressing 'K'.
          </div>
          <img
            src={"/images/coffeeman1.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            When the monster dies, you will see the item that is dropped. You
            can collect by clicking ‘Q’ or ‘E’ and use it by clicking ‘J’, if
            you want Supersaiyan, you can click ‘V’ to apply it .
          </div>
          <img
            src={"/images/coffeeman3.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            This is an item in this game that can be obtained by killing
            monsters. ( We have a few more items besides this picture. )
          </div>
          <img
            src={"/images/coffeeman4.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full flex flex-col">
            If you want to see more details here is the report of the game.
            <div className="flex flex-row items-center mt-2">
              <div className="mr-4">-{">"}</div>
              <a href="/files/CoffeeMan.pdf" download>
                <button className="text-dark-4 text-xs font-bold py-1 px-2 bg-dark-6 rounded-md">
                  Click here to download
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
