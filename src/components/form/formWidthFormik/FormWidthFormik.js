import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";

const FormWidthFormik = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("required"),
        lastName: Yup.string().required("required"),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <Form className="form-control">
        <Field className="input-control" name="firstName" type="text"></Field>
        <div className="err-message-validate">
          <ErrorMessage name="firstName"></ErrorMessage>
        </div>
        <Field className="input-control" name="lastName" type="text"></Field>
        <div className="err-message-validate">
          <ErrorMessage name="lastName"></ErrorMessage>
        </div>
        <button className="btn-control">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormWidthFormik;
