import React from "react";
import "./ModalWindow.scss";

const ModalWindow = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal__window active" : "modal__window"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
