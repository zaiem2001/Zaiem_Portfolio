import React, { useEffect } from "react";
import { gsap } from "gsap";

import "./projectPage.css";
import projects from "../projects";

let initial = false;

const ProjectPage = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".project__intro img", 2, {
      rotate: "360deg",
      ease: "bounce.out",
    }).from(
      ".project__title",
      1.3,
      {
        opacity: 0,
        y: 100,
        ease: "power3.out",
      },
      "-=2"
    );
    if (!initial) {
      tl.from(
        ".project__container .project__card",
        1.7,
        {
          z: "100vw",
          opacity: 0,
          ease: "expo.out",
          stagger: {
            amount: 0.5,
          },
        },
        "-=1.4"
      );
    }

    initial = true;
  }, [tl]);

  return (
    <div className="projects">
      <div className="project__left">
        <div className="project__intro">
          <img src="/assets/Zaiem-portfolio/laptop.svg" alt="projects" />
          <div className="project__title">
            Projects
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
        <span className="project__divider">
          <svg
            width="3"
            height="600"
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

      <div className="project__right">
        <div className="project__container">
          {projects.map((project) => (
            <div className="project__card" key={project.id}>
              <div className="card__title">{project.title}</div>
              <div className="project__image">
                <img src={project.imgs[0]} alt={project.title} />
              </div>
              <div className="backdrop">
                <span>links</span>
                <div className="card__links">
                  <a href={project.git} target="_blank" rel="noreferrer">
                    github
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
