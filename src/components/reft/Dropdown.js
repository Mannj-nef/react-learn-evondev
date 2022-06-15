import React, { useEffect, useRef, useState } from "react";
import useClickOutSize from "../../hooks/useClickOutSize";

const Dropdown = () => {
  // const dropRef = useRef();
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   function checkOutSize(e) {
  //     if (dropRef.current && !dropRef.current.contains(e.target)) {
  //       setShow(false);
  //     }
  //   }

  //   document.addEventListener("click", checkOutSize);
  //   return () => document.removeEventListener("click", checkOutSize);

  // });
  //-------------------------------------------------
  const { show, setShow, nodeRef: dropRef } = useClickOutSize();
  return (
    <>
      <div className="relative w-full select-none pb-2">
        <div
          ref={dropRef}
          className="cursor-pointer rounded-lg p-5 border-2 border-gray-500"
          onClick={() => setShow(!show)}
        >
          Dropdown
        </div>
        {show && (
          <ul className="absolute w-full top-full left-0 rounded-lg p-5 border-2 border-gray-500 bg-white">
            <li className="p-3 text-left cursor-pointer">JavaScript</li>
            <li className="p-3 text-left cursor-pointer">ReactJs</li>
            <li className="p-3 text-left cursor-pointer">VueJs</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
