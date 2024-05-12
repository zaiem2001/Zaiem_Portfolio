import React from "react";
import { Timeline } from "antd";

import "./CustomTimeline.css";
import { companies } from "../projects";

const CustomDot = ({ range }) => {
  return <div className="dotContainer">{range}</div>;
};

const CustomTimeline = () => {
  return (
    <div className="timeline-container">
      <Timeline mode="alternate">
        {companies.map((c) => (
          <Timeline.Item key={c._id} dot={<CustomDot range={c.range} />}>
            <div className="timeline-item">
              <div className="company-name">{c.name}</div>
              <div className="position">{c.role}</div>
              <div className="company-logo">
                <img src={c.img} alt={c.name} />
              </div>
              <hr />
              <ul>
                {c.workDescription.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default CustomTimeline;
