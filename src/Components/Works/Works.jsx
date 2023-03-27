import React from "react";

import daveBrothersLogo from "../../assets/works/daveBrothers.jpg";
import vCubeSolutionsLogo from "../../assets/works/vCubeSolutions.png";

const Works = () => {
  return (
    <section id="works" className="section">
      <div className="section_heading">
        <div className="bg-accent"></div>
        <h1>My Works</h1>
        <div className="bg-accent"></div>
      </div>

      <div className="w-full my-auto flex flex-col gap-8">
        {/* 1stwork */}
        <div className="relative w-full group max-w-3xl p-4">
          <div className="absolute inset-0 bg-accent opacity-10 group-hover:opacity-0 duration-300 rounded-md"></div>
          <div className="flex gap-4 mb-4">
            <div className="w-fit relative rounded-md">
              <img
                src={daveBrothersLogo}
                alt="Dave Brother's"
                className="w-16 rounded-md inset-0 bg-accent opacity-50 group-hover:opacity-100 group-hover:scale-125 duration-300"
              />
            </div>
            <div className="whitespace-pre">
              <h2 className="text-3xl font-semibold mb-1">Dave Brother's </h2>
              <h5 className="text-lg">React JS Developer (Internship)</h5>
              <h6 className="text-sm mb-1 opacity-50 group-hover:opacity-100 duration-300">
                (November 2022 - March 2023)
              </h6>
            </div>
          </div>

          <ol className="relative border-l border-secondary ml-8">
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Get access to over 20+ pages including a dashboard layout,
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Get access to over 20+ pages including a dashboard layout,
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Get access to over 20+ pages including a dashboard layout,
              </p>
            </li>
          </ol>
        </div>

        {/* 2nd work */}
        <div className="relative w-full group max-w-3xl p-4 ml-auto">
          <div className="absolute inset-0 bg-accent opacity-10 group-hover:opacity-0 duration-300 rounded-md"></div>
          <div className="flex gap-4 mb-4">
            <div className="w-fit relative rounded-md">
              <img
                src={vCubeSolutionsLogo}
                alt="Dave Brother's"
                className="w-16 rounded-md inset-0 bg-accent opacity-50 group-hover:opacity-100 group-hover:scale-125 duration-300"
              />
            </div>
            <div className="whitespace-pre">
              <h2 className="text-3xl font-semibold mb-1">V Cube Solutions</h2>
              <h5 className="text-lg">Front-End Developer (Contract)</h5>
              <h6 className="text-sm mb-1 opacity-50 group-hover:opacity-100 duration-300">
                (October 2021 - January 2022)
              </h6>
            </div>
          </div>

          <ol className="relative border-l border-secondary ml-8">
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Get access to over 20+ pages including a dashboard layout,
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Get access to over 20+ pages including a dashboard layout,
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Get access to over 20+ pages including a dashboard layout,
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Works;
