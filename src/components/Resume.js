import React, { useState } from "react";

import Book from "./Book";

const Resume = ({ isBookOpen, setIsBookOpen }) => {
  const [activeBookmark, setActiveBookmark] = useState("resume");

  return (
    <div className="aspect-[4/3] h-4/5  max-h-[900px]">
      <Book
        isOpen={isBookOpen}
        setIsOpen={setIsBookOpen}
        leftPage={
          <div className="left-page h-full overflow-hidden rounded-2xl">
            <div className="h-full grid place-items-center">
              <p className="text-center w-2/3">
                Thank you for checking out my{" "}
                <span className="underline decoration-wavy decoration-2 underline-offset-4 decoration-sky-500 font-semibold">
                  site!
                </span>
                <br />
                <br /> I wanted to create a space where I felt{" "}
                <span className="underline decoration-2 underline-offset-4 decoration-wavy decoration-lime-400 font-semibold">
                  excited
                </span>{" "}
                to share my{" "}
                <span
                  className="underline decoration-2 underline-offset-4 decoration-wavy
                decoration-indigo-500 font-semibold"
                >
                  accomplishments!
                </span>
                <br />
                <br /> I am a continuous learner; something which I think the
                diversity of the projects featured here speaks to.
                <br />
                <br /> On the right is my{" "}
                <span className="underline decoration-2 underline-offset-4 decoration-wavy decoration-cyan-300 font-semibold">
                  resume
                </span>{" "}
                .
                <br />
                <br />
                For any inquiries, find me below
                <br />
                <br />
                <div className="mt-10">
                  <span className="border-2 border-dashed rounded-md border-gray-400 p-5 m-2">
                    <a>
                      <i
                        className={`self-center fa-xl fa-solid fa-envelope text-gray-400`}
                      />
                    </a>
                  </span>
                  <span className="border-2 border-dashed rounded-md border-gray-400 p-5 m-2">
                    <a>
                      <i
                        className={`self-center fa-xl fa-brands fa-instagram text-gray-400`}
                      />
                    </a>
                  </span>
                  <span className="border-2 border-dashed rounded-md border-gray-400 p-5 m-2">
                    <a>
                      <i
                        className={`self-center fa-xl fa-brands fa-github text-gray-400`}
                      />
                    </a>
                  </span>
                </div>
              </p>
            </div>
          </div>
        }
        rightPage={
          <div className="h-full overflow-hidden rounded-2xl">
            <object
              className="w-full h-full"
              data="/assets/resume/resume.pdf"
            />
          </div>
        }
        activeBookmark={activeBookmark}
        setActiveBookmark={setActiveBookmark}
      />
    </div>
  );
};

export default Resume;
