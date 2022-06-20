import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryByCodeAPI } from "../services/Country";

const Country = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const getCountry = async () => {
    try {
      setLoading(true);
      const response = await getCountryByCodeAPI(id);
      if (!response) {
        setLoading(false);
        setError(true);
        return;
      }
      console.log(response);
      setCountry(response);
    } catch (error) {
      setLoading(false);
      setError(true);
      throw error;
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return <div>Country</div>;
};

export default Country;
