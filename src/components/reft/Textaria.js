import React, { useEffect, useRef, useState } from "react";

const Textaria = () => {
  const textareaRef = useRef();
  const [textareaValue, setTextariaValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");

  useEffect(() => {
    if (textareaRef.current)
      setTextareaHeight(textareaRef.current.scrollHeight);
  }, [textareaValue]);

  const handleChange = (e) => {
    setTextariaValue(e.target.value);
    setTextareaHeight("auto");
  };
  return (
    <textarea
      ref={textareaRef}
      className="border-2 border-solid focus:border-green-500 resize-none w-full rounded-lg p-5 overflow-hidden transition-all"
      placeholder="Auto resize"
      value={textareaValue}
      onChange={handleChange}
      style={{ height: textareaHeight }}
    ></textarea>
  );
};

export default Textaria;
