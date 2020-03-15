import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
function InputField({
  title,
  type,
  name,
  placeholder,
  component = null,
  error = null,
  touch
}) {
  const isError = () => touch && error;
  return (
    <div className="row m-2 p-2">
      <div className="col-lg-6 text-left">
        <label>{title}</label>
        <Field
          component={component}
          className={
            isError() ? "form-control form-error-message" : "form-control "
          }
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {isError() && <p className="errorMessage">{error}</p>}
      </div>
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
};

export default InputField;
