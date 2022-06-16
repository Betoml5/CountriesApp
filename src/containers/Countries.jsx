import React, { useEffect, useState } from "react";
import { getAllCountriesAPI } from "../services/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllCountries = async () => {
    try {
      setLoading(true);
      const response = await getAllCountriesAPI();
      if (!response) {
        setLoading(false);
        setError(true);
        return;
      }
      console.log(response);
      setCountries(response);
    } catch (error) {
      setLoading(false);
      setError(true);
      throw error;
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="container">
      <div className="container__country"></div>
    </div>
  );
};

export default Countries;
