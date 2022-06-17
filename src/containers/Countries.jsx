import React, { useEffect, useState } from "react";
import { getAllCountriesAPI } from "../services/Country";

import "../styles/containers/Countries.css";

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
      {countries?.map((country) => (
        <div className="container__country">
          <img src={country.flags.png} alt={country.name} loading="lazy" />
          <div className="container__country-data">
            <h3>{country.name.common}</h3>
            <p>
              Population:{" "}
              <span>
                {country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
