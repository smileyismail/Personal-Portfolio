import React, { useState } from "react";
import { motion } from "framer-motion";

import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { HiCode } from "react-icons/hi";

import projects from "../../data/projects";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <section id="projects" className="section">
      <div className="section_heading">
        <div className="bg-accent"></div>
        <h1>Things I Created</h1>
        <div className="bg-accent"></div>
      </div>

      <div className="my-auto">
        <ul className="flex flex-wrap justify-center items-center gap-6">
          {projects.slice(0, viewMore ? projects.length : 6).map((project) => (
            <motion.li
              key={project.id}
              className="relative bg-secondary rounded-xl p-4 w-72 h-72 flex flex-col border-[0.1px] border-accent group"
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + project.id / 10, duration: 0.3 }}
            >
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className="flex-1 text-5xl text-accent">
                  {project.icon}
                </div>
                <a
                  href={project.githubLink}
                  target="github"
                  title="View Source Code"
                  className="text-xl hover:text-accent group-hover:scale-110 duration-200"
                >
                  <FiGithub />
                </a>
                <a
                  href={project.liveLink}
                  target="_bla"
                  title="Live Preview"
                  className="text-xl hover:text-accent group-hover:scale-110 duration-200"
                >
                  <FiExternalLink />
                </a>
              </div>

              <h1 className="font-semibold text-xl mb-1 group-hover:scale-110 group-hover:text-accent duration-200 origin-bottom-left">
                {project.title}
              </h1>

              <p className="flex-1 text-sm">{project.description}</p>

              <p className="flex justify-start items-center gap-2 text-xs">
                <HiCode className="text-accent" />
                {project.toolsUsed}
              </p>
            </motion.li>
          ))}
        </ul>

        <div className="flex justify-center mt-10">
          <button
            className="border-2 border-accent hover:bg-secondary p-4 text-xl font-semibold rounded-xl w-56 duration-200"
            onClick={() => setViewMore((prevState) => !prevState)}
          >
            {viewMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
