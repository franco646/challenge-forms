import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

import db from "../firebase/db";

const ResultsPage = () => {
  const [user, setUser] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      setUser(docSnap.data());
    };
    fetchUser();
  }, [userId]);

  return (
    <ul>
      <li>{user.full_name}</li>
      <li>{user.email}</li>
      <li>{user.birth_date}</li>
      <li>{user.country_of_origin}</li>
      <li>{user.terms_and_conditions}</li>
    </ul>
  );
};

export default ResultsPage;
