import React from "react";
import { Formik } from "formik";
import Input from "../input/input";
import Select from "../select/select";
import Checkbox from "../checkbox/checkbox";
import Button from "../button/button";

const Form = ({ items, onSubmit }) => {
  const createInitialValues = () => {
    const initialValues = {};
    items.forEach((item) => {
      if (item.type === "select") {
        return (initialValues[item.name] = "");
      }
      if (item.type === "checkbox") {
        return (initialValues[item.name] = false);
      }
      if (item.type === "submit") {
        return null;
      }
      return (initialValues[item.name] = "");
    });
    return initialValues;
  };

  const createValidations = (values) => {
    const errors = {};
    items.forEach((item) => {
      if (item.required) {
        if (!values[item.name]) {
          return (errors[item.name] = "Este campo es obligatorio.");
        }
      }
      if (item.type === "email") {
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[item.name])
        ) {
          return (errors[item.name] = "Ingrese un email válido.");
        }
      }
    });
    console.log(errors);
    return errors;
  };

  return (
    <Formik
      initialValues={createInitialValues()}
      onSubmit={onSubmit}
      validate={createValidations}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          {items.map((item, i) =>
            item.type === "submit" ? null : item.type === "select" ? (
              <Select
                item={item}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[item.name]}
              />
            ) : item.type === "checkbox" ? (
              <Checkbox
                item={item}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[item.name]}
              />
            ) : (
              <Input
                item={item}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[item.name]}
              />
            )
          )}
          <Button type="submit">Enviar</Button>
        </form>
      )}
    </Formik>
  );
};

// {errors[item.name] && touched[item.name] && errors[item.name]}

export default Form;
