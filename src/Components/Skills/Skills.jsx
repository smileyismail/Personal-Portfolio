import React from "react";

import { skills, tools, practices } from "../../data/skills";

import { AiFillStar } from "react-icons/ai";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section_heading">
        <div className="bg-accent"></div>
        <h1>My Skills</h1>
        <div className="bg-accent"></div>
      </div>

      <div className="w-full my-auto">
        <div className="grid justify-center items-center flex-wrap grid-cols-2 gap-10">
          {skills.map((skill) => (
            <div key={skill.id}>
              <p>{skill.name}</p>
              <div className="bg-secondary my-1">
                <div
                  className={`bg-accent h-2 rounded-xl`}
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl">
            Some of the Tools and Practices I use in my development are:
          </h2>
          <div className="grid grid-cols-2 mt-4 text-sm sm:text-base">
            <ul>
              {tools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
            <ul>
              {practices.map((practice, idx) => (
                <li key={idx}>{practice}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
