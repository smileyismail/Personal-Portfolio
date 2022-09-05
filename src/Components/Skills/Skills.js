import React from "react";
import Styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section_heading">
        <h1>
          <span>My Skills</span>
        </h1>
      </div>

      <div className={Styles.skills}>
        <div className={Styles.skills_top}>
          <form className={Styles.skills_top_left}>
            <div>
              <label htmlFor="html">HTML</label>
              <div className={Styles.range_background}>
                <div style={{ width: "80%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="css">CSS</label>
              <div className={Styles.range_background}>
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="bootstrap">Bootstrap</label>
              <div className={Styles.range_background}>
                <div style={{ width: "60%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="materialUI">Material UI</label>
              <div className={Styles.range_background}>
                <div style={{ width: "40%" }}></div>
              </div>
            </div>
          </form>

          <form className={Styles.skills_top_right}>
            <div>
              <label htmlFor="javascript">JavaScript</label>
              <div className={Styles.range_background}>
                <div style={{ width: "75%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="reactJS">React JS</label>
              <div className={Styles.range_background}>
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="nodeJS">Node Js</label>
              <div className={Styles.range_background}>
                <div style={{ width: "30%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="jquery">JQuery</label>
              <div className={Styles.range_background}>
                <div style={{ width: "50%" }}></div>
              </div>
            </div>
          </form>
        </div>

        <div className={Styles.skills_bottom}>
          <h2>Some of the Tools and Practices I use in my development are:</h2>
          <div className={Styles.skills_bottom_division}>
            <div>
              <li>Git + Github</li>
              <li>VScode</li>
              <li>Chrome DevTools</li>
              <li>Emmet</li>
              <li>Responsive web-design</li>
            </div>

            <div>
              <li>Tailwind CSS</li>
              <li>VScode</li>
              <li>Chrome DevTools</li>
              <li>Emmet</li>
              <li>Responsive web-design</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
