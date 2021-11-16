import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router";

import { Link } from "react-router-dom";
import Resume from "../Zaiem__Resume.pdf";

import "./header.css";

let initial = false;

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const initialWidth = window.innerWidth;

  const [width, setWidth] = useState(initialWidth);
  // console.log(width);

  const location = useLocation();

  const path = location.pathname;
  const isHomePage = path === "/";

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      const { innerWidth } = e.currentTarget;
      setWidth(innerWidth);
    });
  }, []);

  const tl = gsap.timeline();

  useEffect(() => {
    if (width > 750) {
      if (!initial) {
        tl.from(".header", 1.5, {
          y: -100,
          ease: "bounce.out",
          delay: 1.9,
        }).from(".header", 1, {
          backgroundColor: "black",
          ease: "power4.out",
        });
      }
    }
    initial = true;
  }, [tl, width]);

  const handleClick = () => {
    setMobile((prev) => !prev);

    if (width < 750) {
      if (mobile) {
        tl.to(".header__links li", 0.9, {
          x: "-200%",
          opacity: 0,
          ease: "power3.out",
          stagger: {
            amount: 0.4,
          },
        }).to(
          ".header__linkContainer",
          1,
          {
            y: "-120%",
            ease: "power3.out",
          },
          "-=0.4"
        );
      } else {
        tl.to(".header__linkContainer", 1, {
          y: 0,
          ease: "bounce.out",
        }).to(".header__links li", 0.7, {
          x: "0%",
          opacity: 1,
          ease: "expo.out",
          stagger: {
            amount: 0.4,
          },
        });
      }
    }
  };

  return (
    <div className="navBar">
      <nav className="header">
        <div className="header__logo">
          <Link to="/" style={{ color: "#fff" }}>
            <h1>Zaiem</h1>
          </Link>
        </div>

        <div
          className={mobile ? "header__linkContainer" : "header__linkContainer"}
        >
          <ul className="header__links">
            {isHomePage ? (
              <li className="header__link" onClick={handleClick}>
                {" "}
                <a href="#skills"> Skills</a>
              </li>
            ) : (
              <li className="header__link" onClick={handleClick}>
                {" "}
                <Link to="/"> Home</Link>
              </li>
            )}
            <li className="header__link" onClick={handleClick}>
              {" "}
              <Link to="/projects"> projects</Link>
            </li>
            {isHomePage && (
              <li className="header__link" onClick={handleClick}>
                <a href="#contact"> contact</a>
              </li>
            )}
          </ul>
        </div>

        <div className="header__download">
          <a href={Resume} target="_blank" rel="noreferrer">
            <button className="header__button" type="button">
              {" "}
              Download CV{" "}
            </button>
          </a>
          <div className="header__contact">
            <img src="/assets/Zaiem-portfolio/download.svg" alt="contact" />
          </div>
        </div>
      </nav>
      <div
        className={mobile ? "mobile__nav active" : "mobile__nav"}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
