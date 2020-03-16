import React from "react";
import { PropTypes } from "prop-types";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

import saveUserInfo from "./Actions/saveUserInfo";
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
            type="text"
            name="name"
            placeholder="Name"
            title="Enter Name"
            error={errors.name}
            touch={touched.name}
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
  mapPropsToValues({ email, name, address }) {
    return {
      email: email || "",
      name: name || "",
      address: address || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is invalide")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("address is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    saveUserInfo({
      url: "http://localhost:8084/user/add",
      userInfo: values
    }).then(response => {
      if (response) {
        resetForm();
      } else {
        setErrors({ email: "Email is already taken" });
      }
    });
  }
})(EmployeeForm);

export default FormikEmployeeForm;
