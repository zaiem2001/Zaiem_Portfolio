import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { companies } from "../projects";
import "./experienceDetails.css";

const ExperienceDetails = () => {
  const { companyName } = useParams();
  const [companyDetails, setCompanyDetails] = useState(null);

  useEffect(() => {
    const company = companies.find(
      (item) => item.name === companyName.replaceAll("-", " ")
    );

    setCompanyDetails(company);
  }, [companyName]);

  return (
    <div className="experience__details">
      <div className="experience__details-wrapper">
        {companyDetails && (
          <div className="details">
            <div className="details__left">
              <div className="img__container">
                <img src={companyDetails.img} alt={companyName} />
              </div>

              <div className="company__role">{companyDetails.role}</div>
            </div>

            <div className="details__right">
              <div className="c__use-cases">
                <div className="key">
                  <span>Use Cases : </span>
                </div>

                <div className="usecase-container">
                  {companyDetails.usecases.map((item, index) => (
                    <span className="use-case value" key={`item-${index}`}>
                      {item}
                      {index !== companyDetails.usecases.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>

              <div className="c__work__description">
                <div className="key">Work Description : </div>

                <div className="value">{companyDetails.workDesc}</div>
              </div>

              <div className="c__description">
                <div className="key">
                  <span>Description : </span>
                </div>

                <span className="value">{companyDetails.description}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetails;
