import React, { useState } from "react";

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
            <li
              key={project.id}
              className="bg-secondary rounded-xl p-4 w-72 h-72 flex flex-col border-[0.1px] border-accent"
            >
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className="flex-1 text-5xl text-accent">
                  {project.icon}
                </div>
                <a
                  href={project.githubLink}
                  target="github"
                  title="View Source Code"
                  className="text-xl hover:text-accent"
                >
                  <FiGithub />
                </a>
                <a
                  href={project.liveLink}
                  target="_bla"
                  title="Live Preview"
                  className="text-xl hover:text-accent"
                >
                  <FiExternalLink />
                </a>
              </div>

              <h1 className="font-semibold text-xl mb-1">{project.title}</h1>

              <p className="flex-1 text-sm">{project.description}</p>

              <p className="flex justify-start items-center gap-2 text-xs">
                <HiCode className="text-accent" />
                {project.toolsUsed}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-10">
          <button
            className="border-2 border-accent hover:bg-secondary p-4 text-xl font-semibold rounded-xl w-56"
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
