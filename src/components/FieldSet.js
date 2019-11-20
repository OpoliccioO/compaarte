import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";

const FieldSet = ({ label, name, ...props }) => {
  return (
    <div style={{ margin: "1.4em 0" }}>
      <ErrorMessage name={name}>
        {msg => {
          return (
            <div style={{ color: "#e60000", marginBottom: "2px" }}>{msg}</div>
          );
        }}
      </ErrorMessage>
      <label htmlFor={name} className="d-flex w-100">
        <Field
          id={name}
          name={name}
          {...props}
          className={label === undefined ? "w-100 pl-4" : "mt-2 mr-3"}
        />
        {label}
      </label>
    </div>
  );
};

export default FieldSet;
