import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldSet from "../FieldSet";

const validationSignIn = Yup.object().shape({
  email: Yup.string()
    .email("Introduce un email válido")
    .required("Introduce tu email"),
  password: Yup.string().required("Introduce tu contraseña")
});

const SignIn = () => {
  return (
    <React.Fragment>
      <h2 className="form-title">Iniciar seseión</h2>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={validationSignIn}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        validateOnBlur={false}
        validateOnChange={false}
        render={({ isSubmitting }) => (
          <Form>
            <FieldSet name="email" placeholder="Email" type="email" />
            <FieldSet
              name="password"
              placeholder="Contraseña"
              type="password"
            />
            <FieldSet name="rememberMe" label="Recuerdame" type="checkbox" />
            <button
              type="submit"
              className="btn btn-block btn-large btn-primary"
              disable={isSubmitting.toString()}
            >
              Iniciar seseión
            </button>
          </Form>
        )}
      />
    </React.Fragment>
  );
};

export default SignIn;
