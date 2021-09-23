import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

import "./colorPalette.css";

const ColorPalette = ({ width }) => {
  const [color, setColor] = useState("");

  const tl = gsap.timeline();

  //   document.body.style.backgroundColor = `#${color}`;

  useEffect(() => {
    if (width > 750) {
      tl.fromTo(
        ".main__layer",
        {
          x: "10vh",
          ease: "power3.out",
        },
        {
          x: "500vw",
          duration: 1,
          ease: "power3.out",
        }
      ).to(".main__layer", {
        x: 0,
        backgroundColor: `#${color}`,
        duration: 1,
        ease: "power3.out",
      });
    } else {
      document.body.style.backgroundColor = `#${color}`;
    }
  }, [color, tl, width]);

  return (
    <div className="section__colorPalette">
      <label htmlFor="blue" className="blue">
        <input
          type="radio"
          name="color"
          id="blue"
          value="1A1A2E"
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="button">
          {" "}
          <span></span>{" "}
        </div>
      </label>

      <label htmlFor="dBlue" className="dBlue">
        <input
          type="radio"
          name="color"
          id="dBlue"
          value="16213E"
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="button">
          {" "}
          <span></span>{" "}
        </div>
      </label>

      <label htmlFor="lBlue" className="lBlue">
        <input
          type="radio"
          name="color"
          id="lBlue"
          value="0F3460"
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="button">
          {" "}
          <span></span>{" "}
        </div>
      </label>

      <label htmlFor="red" className="red">
        <input
          type="radio"
          name="color"
          id="red"
          value="E94560"
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="button">
          {" "}
          <span></span>{" "}
        </div>
      </label>

      <label htmlFor="purple" className="purple">
        <input
          type="radio"
          name="color"
          id="purple"
          value="726A95"
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="button">
          {" "}
          <span></span>{" "}
        </div>
      </label>
    </div>
  );
};

export default ColorPalette;
