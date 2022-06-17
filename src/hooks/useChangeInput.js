import { useState } from "react";

export default function useChangeInput(initValueInput) {
  const [valueInput, setValueInput] = useState(initValueInput);

  const handleChangeInput = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target);
    setValueInput({
      ...valueInput,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return {
    valueInput,
    handleChangeInput,
  };
}
