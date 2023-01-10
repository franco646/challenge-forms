import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

import Form from "../../components/form/form";
import Card from "../../components/card/card";

import data from "../../data/db.json";

import db from "../../firebase/db";
import RedirectLink from "../../components/redirectLink/redirectLink";

import "./form.scss";

const MySwal = withReactContent(Swal);

const FormPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (userId) => {
    navigate(`/results/${userId}`);
    MySwal.close();
  };

  const handleSubmit = async (values) => {
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
        html: <RedirectLink onClick={() => handleNavigation(docRef.id)} />,
      });
    } catch (e) {
      MySwal.fire({
        title: "Error",
        text: e.message,
        icon: "error",
        customClass: {
          confirmButton: "button",
        },
        buttonsStyling: false,
      });
    }
  };

  return (
    <div className="form-page">
      <Card title="Complete el formulario">
        <Form items={data.items} onSubmit={handleSubmit} />
      </Card>
    </div>
  );
};

export default FormPage;
