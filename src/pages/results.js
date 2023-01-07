import React, { useEffect, useState } from "react";
import axios from "axios";

const ResultsPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get("https://us-central1-forms-challenge.cloudfunctions.net/app/data");
      setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <ul>
        <li>{user.full_name}</li>
        <li>{user.email}</li>
        <li>{user.birth_date}</li>
        <li>{user.country_of_origin}</li>
        <li>{user.terms_and_conditions}</li>
    </ul>
  )
};

export default ResultsPage;
