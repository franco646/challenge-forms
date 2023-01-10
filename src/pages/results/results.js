import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";

import Card from "../../components/card/card";
import Button from "../../components/button/button";

import data from "../../data/db.json";

import db from "../../firebase/db";

import "./results.scss";

const MySwal = withReactContent(Swal);

const ResultsPage = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser && localUser.id === userId) {
      return setUser(localUser);
    }
    const fetchUser = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.data()) {
        MySwal.fire({
          title: "Usuario no encontrado",
          icon: "error",
          customClass: {
            confirmButton: "button",
          },
          buttonsStyling: false,
        });
        return navigate("/");
      }
      setUser(docSnap.data());
    };
    fetchUser();
  }, [userId, navigate]);

  return user ? (
    <div className="results-page">
      <Card title="Resultados">
        <ul className="results-list-container">
          {data.items?.map((item, i) =>
            item.type === "submit" ? null : (
              <li className="result-item" key={i}>
                <div className="results-label">{item.label}</div>
                <div className="results-value">
                  {item.type === "checkbox"
                    ? user[item.name]
                      ? "Si"
                      : "No"
                    : user[item.name]}
                </div>
              </li>
            )
          )}
        </ul>
        <Button onClick={() => navigate(-1)}>Volver</Button>
      </Card>
    </div>
  ) : null;
};

export default ResultsPage;
