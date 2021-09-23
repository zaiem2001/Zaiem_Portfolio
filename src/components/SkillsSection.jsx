import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import skills from "../skills";
import "./skillsSection.css";

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // console.log("element is in view", inView);

  return (
    <>
      <section id="skills" className="skills" ref={ref}>
        <div className="skills__left">
          <div className="skills__intro">
            <img src="/assets/Zaiem-portfolio/rocket.svg" alt="scroll" />
            <div className="skills__title">
              skills
              <span>
                <svg
                  width="217"
                  height="80"
                  viewBox="0 0 217 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 61.3325C50.7392 87.9429 90.019 91.114 121.458 83.2084C184.158 67.442 210.741 16.391 213 4"
                    stroke="#CBCBCB"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <span className="section__divider">
            <svg
              width="3"
              height="500"
              viewBox="0 0 3 746"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 0.983521L1.5 745.016"
                stroke="#5B5B5B"
                strokeWidth="1"
              />
            </svg>
          </span>
        </div>

        <div className="skills__right">
          <motion.div className="skills__container">
            {skills.map((skill, index) => (
              <motion.div
                className="skills__card"
                key={skill.id}
                initial={{
                  z: inView ? "80vw" : 0,
                  scale: inView ? 0 : 1,
                  rotateZ: inView ? "180deg" : 0,
                }}
                animate={{
                  z: inView ? 0 : "-80vw",
                  scale: inView ? 1 : 0,
                  rotateZ: inView ? 0 : "180deg",
                }}
                transition={{
                  type: "spring",
                  duration: inView ? 0.2 : 0,
                  bounce: 0.3,
                  delay: index * 0.1,
                }}
              >
                <img src={skill.img} alt="html" />
                <p>{skill.title}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="commingSoon"> more comming soon...</p>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
