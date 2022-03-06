import React from "react";
import "./modal.css";

// export const CustomModal = ({ children, isOpen, toggle }) => (
// 	<div>
// 		<Modal isOpen={isOpen} toggle={toggle}>
// 			{children}
// 		</Modal>
// 	</div>
// );

export const CustomModal = ({ children, isModalOpen }) => (
  <div className="">
    <div
      className={`${isModalOpen ? "modal-backdrop fade show" : ""}`}
      bis_skin_checked="1"
    ></div>
    <div
      className={`modal fade WelcomeModal ${isModalOpen ? "show" : ""}`}
      style={{
        display: `${isModalOpen ? "block" : "none"}`,
      }}
      id="WelcomeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-height radius">{children}</div>
      </div>
    </div>
  </div>
);

export const CustomModalForm = ({ children, isModalOpen }) => (
  <div>
    <div
      className={`${isModalOpen ? "modal-backdrop fade show" : ""}`}
      bis_skin_checked="1"
    ></div>
    <div
      className={`modal fade WelcomeModal ${isModalOpen ? "show" : ""}`}
      style={{
        display: `${isModalOpen ? "block" : "none"}`,
      }}
      id="WelcomeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content radius">{children}</div>
      </div>
    </div>
  </div>
);

export const CustomModalLarge = ({ children, isModalOpen }) => (
  <div>
    <div
      className={`${isModalOpen ? "modal-backdrop fade show" : ""}`}
      bis_skin_checked="1"
    ></div>
    <div
      className={`modal fade WelcomeModal ${isModalOpen ? "show" : ""}`}
      style={{
        display: `${isModalOpen ? "block" : "none"}`,
      }}
      id="WelcomeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content radius">{children}</div>
      </div>
    </div>
  </div>
);
