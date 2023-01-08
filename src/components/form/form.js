import React from "react";
import { Formik } from "formik";

const Form = ({ items, onSubmit }) => {
  const createInitialValues = () => {
    const initialValues = {};
    items.forEach((item) => {
      if (item.type === "select") {
        return (initialValues[item.name] = item.options[0].value);
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
            item.type === "submit" ? null : (
              <div key={i}>
                <label htmlFor={`${item.name}-input`}>
                  {item.label}
                  {item.required ? "*" : null}
                </label>
                {item.type === "select" ? (
                  <select
                    id={`${item.name}-input`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.name}
                  >
                    {item.options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={item.type}
                    name={item?.name}
                    id={`${item?.name}-input`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.name}
                  />
                )}
                {errors[item.name] && touched[item.name] && errors[item.name]}
              </div>
            )
          )}
          <button type="submit">Enviar</button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
