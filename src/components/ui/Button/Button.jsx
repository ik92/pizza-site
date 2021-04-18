import React from "react";
import classNames from "classnames";

import "./Button.scss";

function Button({
  color,
  text,
  plus,
  minus,
  prev,
  next,
  onClick,
  active,
  basket,
}) {
  return (
    <button
      className={classNames(
        "button",
        { [`button--${color}`]: color },
        { [`button--${plus}`]: plus },
        { [`button--${minus}`]: minus },
        { [`button--${prev}`]: prev },
        { [`button--${next}`]: next },
        { [`button--${basket}`]: basket },
        { active: active }
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
