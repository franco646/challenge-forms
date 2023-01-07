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

  return (
    <Formik initialValues={createInitialValues()} onSubmit={onSubmit}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
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

// errors.email && touched.email && errors.email

export default Form;
