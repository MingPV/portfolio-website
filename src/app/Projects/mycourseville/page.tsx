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
          <div className="text-white text-3xl pt-20">Mycourseville-cvtqf7</div>
          <div className="text-white text-start text-md font-extralight w-full">
            Here is a part of the university website I worked on during the
            summer. The section I developed is for teachers to evaluate courses
            from the previous semester. It is integrated with a database.
          </div>
          <img
            src={"/images/mycourseville1.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            You can check some unusual subjects that can be taken. Continue
            filling out the troubleshooting form on the next page.
          </div>
          <img
            src={"/images/mycourseville2.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            You can add sections and courses based on the courses you taught in
            the last semester in university.
          </div>
          <img
            src={"/images/mycourseville3.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            And when you have filled in all the information, We will save your
            information to our database and use it on the other pages.
          </div>
          <img
            src={"/images/mycourseville4.png"}
            alt="Description"
            className="w-[35vw]"
          />

          <div className="text-white text-start text-md font-extralight w-full">
            If you want to delete a course, you can delete it and we will delete
            it in the database for you as well.
          </div>
          <img
            src={"/images/mycourseville6.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full flex flex-col">
            If you want to check the code here is the zip of the code.
            <div className="flex flex-row items-center mt-2">
              <div className="mr-4">-{">"}</div>
              <a href="/files/cvtqf7_summarize.zip" download>
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
