import React from "react";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import "./style.scss";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("Required")
          .min(2, "Must be 3 characters or more"),
        lastName: Yup.string()
          .required("Required")
          .min(2, "Must be 3 characters or more"),
        email: Yup.string().required("Required").email("Invalid emaik address"),
        intro: Yup.string()
          .required("Required")
          .min(2, "Must be 3 characters or more")
          .max(150, "Must be 150 characters or less"),
        job: Yup.string()
          .oneOf(["fe", "be", "fs"], "Invalid Job")
          .required("Required"),
        terms: Yup.boolean()
          .oneOf([true], "You must accept the terms and conditions")
          .required("Required"),
      })}
      onSubmit={(values, action) => {
        console.log(values);
        setTimeout(() => {
          action.resetForm();
          action.setSubmitting(false);
        }, 2000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form className="form-control">
            <MyInput
              name="firstName"
              label="First name"
              id="firstName"
              placeholder="Enter your first name"
            ></MyInput>
            <MyInput
              name="lastName"
              label="Last name"
              id="lastName"
              placeholder="Enter your last name"
            ></MyInput>
            <MyInput
              name="email"
              label="Email Address"
              id="email"
              placeholder="Enter your email addres"
            ></MyInput>
            <MyTextarea
              name="intro"
              label="Intro"
              id="intro"
              placeholder="Introduce yourself..."
            ></MyTextarea>
            <MySelect name="job" label="Your job">
              <option value="">Select your job</option>
              <option value="fe">Frontend developer</option>
              <option value="be">Backend developer</option>
              <option value="fs">Fullstack developer</option>
            </MySelect>
            <MyCheckbox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckbox>
            <button
              type="submit"
              className={`${
                formik.isSubmitting ? "btn-disabled" : ""
              } btn-submit`}
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-wrapp">
      {label && (
        <label htmlFor={props.id || props.name} className="label-control">
          {label}
        </label>
      )}
      <input
        type={props.type || "text"}
        className="input-control"
        {...props}
        {...field}
      />
      {meta.error && meta.touched && (
        <p className="err-massage">{meta.error}</p>
      )}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-wrapp">
      {label && (
        <label htmlFor={props.id || props.name} className="label-control">
          {label}
        </label>
      )}
      <textarea
        className="input-control textarea-control"
        {...props}
        {...field}
      />
      {meta.error && meta.touched && (
        <p className="err-massage">{meta.error}</p>
      )}
    </div>
  );
};
const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-wrapp">
      {label && <label className="label-control">{label}</label>}
      <select className="input-control" {...props} {...field} />
      {meta.error && meta.touched && (
        <p className="err-massage">{meta.error}</p>
      )}
    </div>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-wrapp">
      <label className="label-control flex items-center gap-2">
        <input type="checkbox" checked={meta.value} {...props} {...field} />
        {children}
      </label>
      {meta.error && meta.touched && (
        <p className="err-massage">{meta.error}</p>
      )}
    </div>
  );
};

export default SignUpForm;
