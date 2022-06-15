import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <input
      ref={inputRef}
      className="border-solid border-2 rounded-lg w-full focus:border-cyan-400 p-5 "
      type="text"
      placeholder="Auto Focus"
    />
  );
};

export default Input;
