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
            In this project, our team of five developed a robust system for
            chess piece detection utilizing advanced computer vision techniques.
            By integrating YOLOv8, a state-of-the-art object detection model,
            with edge detection algorithms, we aimed to accurately identify and
            classify chess pieces on a board in various configurations. This
            combination enhances detection precision, even in complex scenarios
            involving overlapping pieces or varying lighting conditions. The
            project demonstrates the potential of AI-driven solutions in
            analyzing and digitizing physical chess games, paving the way for
            applications in game analysis, training tools, and interactive
            gameplay systems.
          </div>
          <img
            src={"/images/chess2.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="flex flex-col text-white text-start text-md font-extralight w-full">
            <div>The system operates as follows:</div>
            <div>
              1. Edge Detection: Initially, the edges of the chessboard are
              detected to determine its position within the frame.
            </div>
            <div>
              2. Piece Detection: YOLOv8 identifies the chess pieces on the
              board.
            </div>
            <div>
              3. Position Mapping: The system compares the pixel data of the
              board and the detected chess pieces, calculating and storing their
              possible positions.
            </div>
            <div>
              4. Frame-by-Frame Analysis: Each video frame is analyzed to detect
              movements of the pieces.
            </div>
            <div>
              5. FEN Generation: When a piece is detected to have moved, the
              system generates the corresponding FEN (Forsyth-Edwards Notation)
              text and saves it to a CSV file.
            </div>
          </div>
          <img
            src={"/images/chess3.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            This is the process used to determine the position of the boxes on
            the chessboard.
          </div>
          <img
            src={"/images/chess1.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            This is the result of detecting the type of chess on the board.
          </div>
          <img
            src={"/images/chess4.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full">
            The model&apos;s performance improved significantly after
            hyperparameter tuning and data augmentation. Initially, with the
            pre-trained YOLOv8s model, the loss values for both training and
            validation were higher, and the metrics (precision, recall, mAP)
            showed moderate results. After adjustments, the loss values
            decreased consistently, and key metrics such as precision, recall,
            and mAP increased, reflecting better detection accuracy and
            reliability. These improvements indicate that the fine-tuned model
            is more effective in detecting and classifying chess pieces
            accurately across various frames. This optimized approach ensures
            accurate tracking of piece positions and movements for generating
            FEN outputs.
          </div>
          <img
            src={"/images/chess5.png"}
            alt="Description"
            className="w-[35vw]"
          />
          <div className="text-white text-start text-md font-extralight w-full flex flex-col">
            If you want to see more details here is the notebook of the project.
            <div className="flex flex-row items-center mt-2">
              <div className="mr-4">-{">"}</div>
              <a href="/files/chessDetection.ipynb" download>
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
