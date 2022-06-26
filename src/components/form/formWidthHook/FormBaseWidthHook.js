import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./style.scss";
import InputWidthHook from "./InputWidthHook";
import { useEffect } from "react";

const validateSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .min(2, "Must be 2 chareacter or more")
    .max(20, "Must be 20 chareacter or lest"),
  lastName: Yup.string()
    .required("Required")
    .min(2, "Must be 2 character or more")
    .max(20, "Must be 20 character or less"),
  email: Yup.string().required("Required").email("Invalid email address"),
});

const FormBaseWidthHook = () => {
  const { handleSubmit, formState, control, setFocus, reset } = useForm({
    resolver: yupResolver(validateSchema),
  });

  const { errors, isSubmitting, isValid } = formState;

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const submit = (values) => {
    if (isValid)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          console.log("submit", values);
          reset();
        }, 2000);
      });
  };
  return (
    <form
      className="form-control"
      onSubmit={handleSubmit(submit)}
      autoComplete="off"
    >
      <div className="input-wrapp">
        <InputWidthHook
          lable="First Name"
          name="firstName"
          id="firstName"
          control={control}
          placeholder="Enter you first Name"
          errors={errors?.firstName}
        ></InputWidthHook>

        <InputWidthHook
          lable="Last Name"
          name="lastName"
          id="lastName"
          control={control}
          placeholder="Enter you last Name"
          errors={errors?.lastName}
        ></InputWidthHook>

        <InputWidthHook
          lable="Email Address"
          name="email"
          id="email"
          control={control}
          placeholder="Enter you email address"
          errors={errors?.email}
        ></InputWidthHook>
      </div>
      <button className="btn-submit">
        {isSubmitting ? (
          <div className="w-5 h-5 border boorder-[2px] border-white border-t-transparent rounded-full animate-spin m-auto"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default FormBaseWidthHook;
