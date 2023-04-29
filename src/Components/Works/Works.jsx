import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import daveBrothersLogo from "../../assets/works/daveBrothers.jpg";
import vCubeSolutionsLogo from "../../assets/works/vCubeSolutions.png";

const workOneVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.4 } },
};

const workTwoVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.4 } },
};

const Works = () => {
  const { ref, inView } = useInView();

  return (
    <section id="works" className="section">
      <div className="section_heading">
        <div className="bg-accent"></div>
        <h1>My Works</h1>
        <div className="bg-accent"></div>
      </div>

      <div ref={ref} className="w-full my-auto flex flex-col gap-8">
        {/* 1stwork */}
        <motion.div
          className="relative w-full group max-w-3xl p-4"
          variants={workOneVariants}
          animate={inView ? "visible" : "hidden"}
        >
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
              <h2 className="text-2xl sm:text-3xl font-semibold mb-1">
                Dave Brother's
              </h2>
              <h5 className="text-md sm:text-lg">
                React JS Developer (Internship)
              </h5>
              <h6 className="text-xs sm:text-sm mb-1 opacity-50 group-hover:opacity-100 duration-300">
                (November 2022 - March 2023)
              </h6>
            </div>
          </div>

          <ol className="relative border-l border-secondary ml-8">
            <li className="ml-4 text-sm sm:text-base">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Developed and maintained multiple applications using React.js
                and Next.js
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Integrated with the backend technologies such as Node.js,
                Express.js, and Firebase.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Collaborated with designers, project managers, and other
                developers to deliver projects on-time and utilizing semantic
                methodologies and version control tools such as Git.
              </p>
            </li>
          </ol>
        </motion.div>

        {/* 2nd work */}
        <motion.div
          className="relative w-full group max-w-3xl p-4 ml-auto"
          variants={workTwoVariants}
          animate={inView ? "visible" : "hidden"}
        >
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
              <h2 className="text-2xl sm:text-3xl font-semibold mb-1">
                V Cube Software Solutions
              </h2>
              <h5 className="text-md sm:text-lg">
                Front-End Developer (Contract)
              </h5>
              <h6 className="text-xs sm:text-sm mb-1 opacity-50 group-hover:opacity-100 duration-300">
                (October 2021 - January 2022)
              </h6>
            </div>
          </div>

          <ol className="relative border-l border-secondary ml-8">
            <li className="ml-4 text-sm sm:text-base">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Worked on the frontend part of full-stack projects that were
                built using Python and Java.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Utilized advanced animations and designed various charts and
                graphs.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <p className="mb-4  text-customWhite">
                Crafted comprehensive project documentation that captured every
                detail of the development process.
              </p>
            </li>
          </ol>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
