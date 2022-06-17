import React from "react";
import useChangeInput from "../../../hooks/useChangeInput";

const Form = () => {
  const { valueInput, handleChangeInput } = useChangeInput({
    firstname: "",
    email: "",
    hoby: false,
    radioTest: "",
  });
  return (
    <form
      className="flex flex-col max-w-[400px] w-full mx-auto gap-5"
      autoComplete="off"
    >
      <Input
        name="firstname"
        placeholder="Enter you first name"
        onChange={handleChangeInput}
        value={valueInput.firstname}
      ></Input>
      <Input
        name="email"
        type="email"
        placeholder="Enter you email address"
        onChange={handleChangeInput}
        value={valueInput.email}
      ></Input>
      <span className="flex gap-3">
        <Input
          name="hoby"
          type="checkbox"
          onChange={handleChangeInput}
          value={valueInput.checkbox}
        ></Input>
        <Input
          type="radio"
          name="radioTest"
          onChange={handleChangeInput}
          value="a"
        ></Input>
        <Input
          type="radio"
          name="radioTest"
          onChange={handleChangeInput}
          value="b"
        ></Input>
      </span>

      <button className="w-full rounded-lg bg-blue-600 text-white p-4">
        Submit
      </button>
    </form>
  );
};

const Input = ({ type = "text", ...props }) => {
  return <input className="rounded-lg p-4" type={type} {...props} />;
};

export default Form;
