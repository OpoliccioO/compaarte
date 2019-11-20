import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldSet from "../FieldSet";

const validationSignUp = Yup.object().shape({
  firstName: Yup.string().required("Introduce tu nombre"),
  lastName: Yup.string(),
  email: Yup.string()
    .email("Introduce un email válido")
    .required("Introduce un email"),
  password: Yup.string()
    .min(6, "Las contraseñas deben tener 6 o más caracteres")
    .required("Introduce una contraseña"),
  acceptCond: Yup.boolean().oneOf([true], "Tienes que acceptar las condiciones")
});

const SignUp = () => {
  return (
    <React.Fragment>
      <h2 className="form-title">Regístrate</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          acceptCond: false
        }}
        validationSchema={validationSignUp}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        validateOnBlur={false}
        render={({ isSubmitting }) => (
          <Form>
            <FieldSet name="firstName" type="text" placeholder="Nombre" />
            <FieldSet name="lastName" type="text" placeholder="Apellidos" />
            <FieldSet name="email" placeholder="Email" type="email" />
            <FieldSet
              name="password"
              placeholder="Contraseña"
              type="password"
            />
            <FieldSet
              name="acceptCond"
              label="Accepto las condiciones de CompaArte"
              type="checkbox"
            />
            <button
              type="submit"
              className="btn btn-block btn-large btn-primary"
              disable={isSubmitting.toString()}
            >
              Regístrate
            </button>
          </Form>
        )}
      />
    </React.Fragment>
  );
};

export default SignUp;
