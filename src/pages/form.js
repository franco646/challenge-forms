import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

import Form from "../components/form/form";

import data from "../data/db.json";

const MySwal = withReactContent(Swal);

const FormPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/results");
    MySwal.close();
  };

  const handleSubmit = async (values) => {
    try {
      await axios.post("https://us-central1-forms-challenge.cloudfunctions.net/app/", values);
      MySwal.fire({
        title: "Guardado con éxito",
        icon: "success",
        html: (
          <p>
            Para ver los resultados haga{" "}
            <u onClick={handleNavigation}>click aquí</u>
          </p>
        ),
      });
    } catch (error) {
      MySwal.fire("Error", error.message, "error");
    }
  };

  return (
    <div>
      <Form items={data.items} onSubmit={handleSubmit} />
    </div>
  );
};

export default FormPage;
