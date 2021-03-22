import React from "react";
import classNames from "classnames";

import "./Button.scss";

function Button({ color, text }) {
  return (
    <button className={classNames("button", { [`button--${color}`]: color })}>
      {text}
    </button>
  );
}

export default Button;
