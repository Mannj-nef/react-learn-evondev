import React from "react";
// import "./btnStyle.scss";

import style from "./BtnStyle.module.css";

/**
 *  import vào và sử dụng
 * 
 *    <Button>button</Button>
      <Button secondary>secondary</Button>
 */

const Button = ({ children, secondary }) => {
  return (
    // scss
    // <button className={`btn ${className || ""}`}>{children}</button>

    // css module
    <button
      className={`${style.btnPrimary} ${secondary ? style.btnSecondary : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
