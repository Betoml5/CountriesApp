import React, { useEffect, useState } from "react";
import { getAllCountriesAPI, getCountryByNameAPI } from "../services/Country";
import searchIconBlack from "../assets/images/search-black.png";
import searchIconWhite from "../assets/images/search-white.png";

import "../styles/containers/Countries.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [searchedCountries, setSearchedCountries] = useState([]);

  const { darkMode } = useContext(Context);

  const getAllCountries = async () => {
    try {
      setLoading(true);
      const response = await getAllCountriesAPI();
      if (!response) {
        setLoading(false);
        setError(true);
        return;
      }
      setCountries(response);
    } catch (error) {
      setLoading(false);
      setError(true);
      throw error;
    }
  };

  const onSearch = async (name) => {
    try {
      const response = await getCountryByNameAPI(name);

      if (!response) {
        setLoading(false);
        setError(true);
        setSearchedCountries([]);

        return;
      }

      setSearchedCountries(response);
    } catch (error) {
      setLoading(false);
      setError(true);
      setSearchedCountries([]);
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className={`${darkMode && "darkModeBody"} container`}>
      <div className={`${darkMode && "darkModeElement"} container__search`}>
        <input
          type="text"
          placeholder="Search for a country"
          className={`${darkMode && "darkModeElement"}`}
          onChange={(e) => {
            if (e.target.value === "") {
              setSearchedCountries(countries);
            }
            setName(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && onSearch(name);
          }}
        />
        <img
          src={`${darkMode ? searchIconWhite : searchIconBlack}`}
          alt="search icon"
        />
      </div>
      <div className={`${darkMode && "darkModeElement"} container__select`}>
        <select
          className={`${darkMode && "darkModeElement"} container__select`}
        >
          <option disabled>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>

      {searchedCountries.length > 0
        ? searchedCountries?.map((country) => (
            <Link
              to={`/country/${country.alpha2Code}`}
              className={`${darkMode && "darkModeElement"} country__link`}
            >
              <div className="container__country">
                <img
                  src={country.flags.svg}
                  alt={country.name}
                  loading="lazy"
                />
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
          ))
        : countries?.length > 0 &&
          countries?.map((country) => (
            <Link
              to={`/country/${country.alpha2Code}`}
              className={`${darkMode && "darkModeElement"}  country__link`}
            >
              <div className="container__country">
                <img
                  src={country.flags.svg}
                  alt={country.name}
                  loading="lazy"
                />
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
