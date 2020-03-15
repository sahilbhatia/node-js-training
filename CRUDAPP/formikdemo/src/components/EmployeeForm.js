import React from "react";
import { PropTypes } from "prop-types";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
const EmployeeForm = ({ errors, touched, isSubmitting }) => {
  return (
    <div className="container">
      <Form>
        <>
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            title="Enter email"
            error={errors.email}
            touch={touched.email}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            title="Enter Password"
            error={errors.password}
            touch={touched.password}
          />
          <InputField
            title="Enter Address"
            component="textarea"
            placeholder="Enter your address"
            className="form-control"
            name="address"
            error={errors.address}
            touch={touched.address}
          />
          <div className="row m-2 p-2">
            <div className="col-lg-6">
              <button
                type="submit"
                className="btn btn-outline-primary"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      </Form>
    </div>
  );
};
EmployeeForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func
};
const FormikEmployeeForm = withFormik({
  mapPropsToValues({ email, password, address }) {
    return {
      email: email || "",
      password: password || "",
      address: address || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is invalide")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characheter long")
      .required("Password is required"),
    address: Yup.string().required("address is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      //Todo API call
      if (values.email === "vrushab.bayas@gmail.com") {
        setErrors({ email: "Email is already taken" });
      } else {
        resetForm();
      }
    }, 2000);
  }
})(EmployeeForm);

export default FormikEmployeeForm;
