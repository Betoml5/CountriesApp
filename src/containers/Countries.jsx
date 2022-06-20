import React, { useEffect, useState } from "react";
import { getAllCountriesAPI } from "../services/Country";
import searchIcon from "../assets/images/search.svg";

import "../styles/containers/Countries.css";
import { Link } from "react-router-dom";

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
      <div className="container__search">
        <input type="text" placeholder="Search for a country" />
        <img src={searchIcon} alt="search icon" />
      </div>
      <div className="container__select">
        <select>
          <option disabled>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      {countries?.map((country) => (
        <Link to={`/country/${country.cca2}`} className="country__link">
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
        </Link>
      ))}
    </div>
  );
};

export default Countries;
