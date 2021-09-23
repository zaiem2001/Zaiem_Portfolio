import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { init } from "ityped";

import ContactSection from "../components/ContactSection";
import SkillsSection from "../components/SkillsSection";
import "./homePage.css";
import ColorPalette from "../components/ColorPalette";

let initial = false;

const HomePage = () => {
  const initialWidth = window.innerWidth;

  const [width, setWidth] = useState(initialWidth);

  const item = useRef();

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      const { innerWidth } = e.currentTarget;
      setWidth(innerWidth);
    });
  }, []);

  const tl = gsap.timeline();

  useEffect(() => {
    if (!initial) {
      tl.to(".intro-overlay", 1, {
        y: "-100%",
        ease: "power3.inOut",
      });

      tl.from(".section__title p", 1.5, {
        opacity: "0",
        y: 200,
        scale: 0.4,
        ease: "expo.out",
        stagger: { amount: 0.4 },
      })
        .from(
          ".section__right__svg",
          1.5,
          {
            opacity: "0",
            y: 200,
            scale: 0.4,
            ease: "bounce.out",
          },
          "-=1.5"
        )
        .from(".blob__svg", 1, {
          opacity: 0,
          ease: "power3.out",
        })
        .from(
          ".section__button__container",
          1,
          {
            opacity: 0,
            ease: "power.out",
          },
          "-=1"
        )
        .from(".section__colorPalette label", 1.5, {
          y: "-50vh",
          ease: "bounce.out",
          stagger: { amount: 0.4 },
        });
    }

    initial = true;
  }, [tl]);

  useEffect(() => {
    init(item.current, {
      backDelay: 1500,
      backSpeed: 60,
      strings: ["full stack developer.", "student."],
    });
  }, []);

  return (
    <>
      <section className="home" id="home">
        <ColorPalette width={width} />

        <div
          className="intro-overlay"
          style={{ position: "fixed", display: initial ? "none" : "block" }}
        ></div>
        <div className="section__left">
          <div className="section__left__title">
            <div className="section__svg">
              <svg
                className="blob__svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#273036"
                  d="M70.1,-35.3C83.8,-16.7,83,15.4,68.9,40C54.8,64.6,27.4,81.7,3.2,79.8C-21,78,-42,57.2,-52.2,34.9C-62.3,12.6,-61.6,-11.3,-51.1,-28C-40.6,-44.7,-20.3,-54.3,4,-56.6C28.2,-58.9,56.4,-53.9,70.1,-35.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <div className="section__title" style={{ overflow: "hidden" }}>
              <p className="section__secondary">hi there, i'm</p>
              <p className="section__main__title">Zaiem munshi</p>
              <p className="section__secondary">
                a <span ref={item}></span>
              </p>
            </div>
          </div>

          <div
            className="section__button__container"
            style={{ overflow: "hidden" }}
          >
            <Link
              className="section__link"
              to="/projects"
              style={{ color: "#273036" }}
            >
              {" "}
              <button className="section__button">projects</button>
            </Link>
          </div>
        </div>
        <div className="section__right">
          <div className="section__right__svg">
            <img src="/assets/Zaiem-portfolio/homepage.svg" alt="svg" />
          </div>
        </div>

        <div className="section__mouse">
          <a href="#skills">
            <img src="/assets/Zaiem-portfolio/mouse.svg" alt="scroll" />
          </a>
          <p className="section__scroll"> scroll down</p>
        </div>
      </section>

      {/* skills section */}

      <SkillsSection />

      {/* contact s */}

      <ContactSection />
    </>
  );
};
export default HomePage;
