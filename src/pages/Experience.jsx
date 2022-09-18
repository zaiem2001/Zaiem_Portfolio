import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gsap } from "gsap";

import { companies } from "../projects";
import { handleDate } from "../helpers/formatDate";
import "./experience.css";

let initial = false;

const Experience = () => {
  const history = useHistory();

  const handleDetails = (data) => {
    const newName = data.name.replaceAll(" ", "-");
    history.push("/experience/" + newName);
  };

  const tl = gsap.timeline();

  useEffect(() => {
    if (!initial) {
      tl.from(
        ".experience .company",
        2,
        {
          x: "-100vw",
          opacity: 0,
          ease: "expo.out",
          stagger: {
            amount: 0.5,
          },
        },
        "-=1.4"
      ).from(
        ".experience .company-stack-color",
        2,
        {
          x: "100vw",
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
    <div className="experience">
      <div className="experience-wrapper">
        {companies.map((item) => (
          <div className="company" key={item.name}>
            <div className="company-top">
              <div className="img-container">
                <img src={item.img} alt="company" />
              </div>

              <div className="company-info">
                <div className="company-name">
                  <span>{item.name}</span>
                </div>

                <div className="company-website">
                  <a href={item.website} target="_blank" rel="noreferrer">
                    {item.website}
                  </a>
                </div>

                <div className="company-location">
                  <p>{item.location}</p>
                </div>

                <div className="company-desc">
                  <span>{item.description.substring(0, 100) + "..."}</span>
                </div>
              </div>
            </div>

            <div className="line"></div>

            <div className="company-bottom">
              <div className="company-role">
                <span className="key">Role : </span>
                <span className="value">{item.role}</span>
              </div>

              <div className="company-duration">
                <span className="key">Duration : </span>
                <span className="value">{handleDate(item.startDate)}</span> -
                <span className="value">
                  {" "}
                  {item.endDate ? handleDate(item.endDate) : "Ongoing"}
                </span>
              </div>

              <div className="company-work-desc">
                <span className="key">Work Desc : </span>
                {""}
                <span className="value">
                  {item.workDesc.substring(0, 94) + "..."}
                </span>
              </div>

              <div className="company-work-desc">
                <span className="key">Use-Cases : </span>
                {""}
                {item.usecases.slice(0, 3).map((usecase, idx) => (
                  <span key={usecase} className="value">{`${usecase}${
                    idx !== 2 ? ", " : ""
                  }`}</span>
                ))}
                <span style={{ color: "lightgreen" }}>...</span>
              </div>

              <div className="company-stack">
                <div className="stack-container">
                  {item.stackUsed.map((stack) => (
                    <div className="company-stack-color" key={stack}>
                      <p className="stack-colored m-0">{stack}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="btn show-details"
              onClick={() => handleDetails(item)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
