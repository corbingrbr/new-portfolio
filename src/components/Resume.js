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
          <div className="left-page h-full overflow-hidden rounded-2xl bg-gray-100">
            <div className="h-full grid place-items-center">
              <p className="text-left w-2/3">
                Thank you for checking out my{" "}
                <span className="underline decoration-2 underline-offset-4 decoration-wavy decoration-lime-400 font-semibold">
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
                decoration-lime-400 font-semibold"
                >
                  journey!
                </span>
                <br />
                <br /> Curiousity compels me, and the diversity of projects
                featured here I think reflects that.
                <br />
                <br /> On the right is my{" "}
                <span className="underline decoration-2 underline-offset-4 decoration-wavy decoration-lime-400 font-semibold">
                  resume
                </span>{" "}
                .
                <br />
                <br />
                For any inquiries, find me{" "}
                <span
                  className="underline decoration-2 underline-offset-4 decoration-wavy
                decoration-lime-400 font-semibold"
                >
                  below
                </span>
                .
                <br />
                <br />
                <div className="flex justify-around mt-10">
                  <a href="mailto: corbingrbr@gmail.com">
                    <span className="border-2 border-dashed rounded-md border-gray-400 hover:border-gray-700 text-gray-500 hover:text-gray-700 p-5 ">
                      <i className={`self-center fa-xl fa-solid fa-envelope`} />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/corbingrbr/"
                    target="_blank"
                  >
                    <span className="border-2 border-dashed rounded-md border-gray-400 hover:border-gray-700 text-gray-500 hover:text-gray-700 p-5">
                      <i
                        className={`self-center fa-xl fa-brands fa-instagram`}
                      />
                    </span>
                  </a>
                  <a href="https://www.threads.net/@corbingrbr" target="_blank">
                    <span className="border-2 border-dashed rounded-md border-gray-400 hover:border-gray-700 text-gray-500 hover:text-gray-700 p-5 ">
                      <i className={`self-center fa-xl fa-brands fa-threads`} />
                    </span>
                  </a>
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
