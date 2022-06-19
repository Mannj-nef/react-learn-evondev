import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./style.scss";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validateSchema) });

  console.log(errors);

  const submit = (values) => {
    console.log(values);
  };
  return (
    <form className="form-control" onSubmit={handleSubmit(submit)}>
      <div className="input-wrapp">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="input-control"
          placeholder="Enter your first name"
          {...register("firstName")}
        />
        {errors?.firstName?.message && (
          <p className="err-massage">{errors.firstName.message}</p>
        )}
      </div>
      <div className="input-wrapp">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="input-control"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
        {errors?.lastName?.message && (
          <p className="err-massage">{errors.lastName.message}</p>
        )}
      </div>
      <div className="input-wrapp">
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          className="input-control"
          placeholder="Enter your Email Address"
          {...register("email")}
        />
        {errors?.email?.message && (
          <p className="err-massage">{errors.email.message}</p>
        )}
      </div>
      <button className="btn-submit">Submit</button>
    </form>
  );
};

export default FormBaseWidthHook;
