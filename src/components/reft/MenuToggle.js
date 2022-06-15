import React, { forwardRef } from "react";

const MenuToggle = ({ show }, nodeRef) => {
  return (
    <div
      ref={nodeRef}
      className={`fixed top-0 bottom-0 left-0 w-[300px] z-10 bg-green-500 transition-all ${
        show ? "" : "-translate-x-full"
      }`}
    ></div>
  );
};

export default forwardRef(MenuToggle);
