import React, { useState } from "react";

import "./experience.css";
import { companies } from "../projects";
import moment from "moment";
import { CustomModalLarge } from "../components/CustomModal";

const Experience = () => {
  const [currentCompany, setCurrentCompany] = useState(null);
  const [modal, setModal] = useState(false);

  const handleDate = (date) => {
    const formatedDate = new Date(date);
    const format = "MMMM Do, YYYY";

    return moment(formatedDate).format(format);
  };

  const handleDetails = (data) => {
    setCurrentCompany(data);
    setModal((prev) => !prev);
  };

  return (
    <>
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

      {currentCompany && (
        <CustomModalLarge isModalOpen={modal}>
          <div className="d-flex flex-row modal-header no-border">
            <div className="modal-title align-self-center">
              {currentCompany.name}
            </div>

            <div className="d-flex w-25 justify-content-end align-self-end modal-close">
              <span
                className="close"
                style={{ cursor: "pointer", fontSize: "20px" }}
                onClick={() => {
                  setModal(false);
                  setCurrentCompany(null);
                }}
              >
                &times;
              </span>
            </div>
          </div>
          <div
            className="modal-body pt-0"
            // style={{
            //   maxHeight: "550px",
            //   overflowY: "scroll",
            //   overflowX: "hidden",
            // }}
          >
            {currentCompany && (
              <div className="company-details mx-1 p-1">
                <div className="company-desc p-1 border-bottom mb-2">
                  <p className="m-0 work-details key">Work :</p>{" "}
                  <span className="details desc">
                    {currentCompany.workDesc}
                  </span>
                </div>

                <div className="company-desc p-1 border-bottom">
                  <p className="m-0 work-details key">Use-Cases :</p>{" "}
                  <span className="stackUsed desc">
                    {currentCompany.usecases.map((item, idx) => (
                      <p key={`${item}+${idx}`}>{item}, </p>
                    ))}
                  </span>
                </div>
              </div>
            )}
          </div>
        </CustomModalLarge>
      )}
    </>
  );
};

export default Experience;
