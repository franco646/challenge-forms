import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

import Form from "../components/form/form";
import Card from "../components/card/card";

import data from "../data/db.json";

import db from "../firebase/db";

const MySwal = withReactContent(Swal);

const FormPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (userId) => {
    navigate(`/results/${userId}`);
    MySwal.close();
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      MySwal.fire({
        title: "Guardando...",
        customClass: {
          loader: "sweetAlert2-loader",
        },
        didOpen: () => {
          MySwal.showLoading();
        },
      });
      const docRef = await addDoc(collection(db, "users"), { ...values });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...values, id: docRef.id })
      );
      MySwal.fire({
        title: "Guardado con exito",
        icon: "success",
        customClass: {
          confirmButton: "button",
        },
        buttonsStyling: false,
        confirmButtonText: "Cerrar",
        html: (
          <p>
            Para ver los resultados haga{" "}
            <u onClick={() => handleNavigation(docRef.id)}>click aquí</u>
          </p>
        ),
      });
    } catch (e) {
      MySwal.fire("Error", e.message, "error");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <Card title="Complete el formulario">
        <Form items={data.items} onSubmit={handleSubmit} />
      </Card>
    </div>
  );
};

export default FormPage;
