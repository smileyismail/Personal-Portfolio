import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { skills, tools, practices } from "../../data/skills";

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section">
      <div className="section_heading">
        <div className="bg-accent"></div>
        <h1>My Skills</h1>
        <div className="bg-accent"></div>
      </div>

      <div className="w-full my-auto">
        <div
          ref={ref}
          className="grid justify-center items-center flex-wrap grid-cols-2 gap-10"
        >
          {skills.map((skill) => (
            <div key={skill.id}>
              <p>{skill.name}</p>
              <div className="bg-secondary my-1">
                <motion.div
                  className={`bg-accent h-2 rounded-xl`}
                  animate={
                    inView ? { width: skill.progress + "%" } : { width: 0 }
                  }
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
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
