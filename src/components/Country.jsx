import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryByCodeAPI } from "../services/Country";
import arrowBackIcon from "../assets/images/back.png";
import "../styles/components/Country.css";

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
      setCountry(response[0]);
    } catch (error) {
      setLoading(false);
      setError(true);
      throw error;
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  if (!country) {
    return <p>Loading...</p>;
  }

  console.log(Object.values(country.currencies));

  const currencies = Object.values(country.currencies);

  return (
    <div className="countryDetails__container">
      <div className="countryDetails__container-backBtn">
        <img src={arrowBackIcon} alt="arrow-back" />
        <p>Back</p>
      </div>

      <div className="countryDetails__container-data">
        <img src={country.flags?.png} alt={country.name?.common} />
        <div>
          <h3>{country.name?.common}</h3>
          <div>
            <p>Native Name: {country.name?.nativeName.deu?.common}</p>
            <p>
              Population:{" "}
              {country?.population
                ?.toString()
                ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p>Region: {country?.region}</p>
            <p>Sub region: {country?.subregion}</p>
            <p>Capital: {country?.capital}</p>
          </div>

          <div>
            <p>
              Top Level Domain:{" "}
              {country?.tld?.map((item) => (
                <span>{item}</span>
              ))}
            </p>
            <p>
              Currencies:{" "}
              {currencies.map((item) => (
                <span>
                  {item.symbol} {item.name}
                </span>
              ))}
            </p>

            <p>Languages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
