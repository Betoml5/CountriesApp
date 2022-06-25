import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCountryByCodeAPI } from "../services/Country";
import arrowBackIcon from "../assets/images/back.png";
import "../styles/components/Country.css";

const Country = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const getCountry = async () => {
    try {
      setLoading(true);
      const response = await getCountryByCodeAPI(id);
      if (!response) {
        setLoading(false);
        setError(true);
        return;
      }

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

  return (
    <div className="countryDetails__container">
      <div
        className="countryDetails__container-backBtn"
        onClick={() => navigate("/")}
      >
        <img src={arrowBackIcon} alt="arrow-back" />
        <p>Back</p>
      </div>

      <div className="countryDetails__container-data">
        <img src={country.flags?.svg} alt={country.name?.common} />
        <div className="countryDetails__container-data-wrapper">
          <h3>{country.name}</h3>
          <div className="countryDetails__container-wrapper">
            <div>
              <p>Native Name: {country.nativeName}</p>
              <p>
                Population:{" "}
                <span>
                  {country?.population
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
              <p>
                Region: <span>{country?.region}</span>
              </p>
              <p>
                Sub region: <span>{country?.subregion}</span>
              </p>
              <p>
                Capital: <span>{country?.capital}</span>
              </p>
            </div>

            <div>
              <p>
                Top Level Domain:{" "}
                {country?.topLevelDomain?.map((item) => (
                  <span>{item}</span>
                ))}
              </p>
              <p className="country__currencies">
                Currencies:{" "}
                {country?.currencies?.map((item) => (
                  <span>{item.name}</span>
                ))}
              </p>

              <p className="country__languages">
                Languages:{" "}
                {country?.languages?.map((item) => (
                  <span>{item.name}</span>
                ))}
              </p>
            </div>
          </div>

          <div className="country__boders">
            <h4>Border Countries:</h4>
            {country?.borders?.length === 0 ? (
              <span>There is no country borders</span>
            ) : (
              <div>
                {country?.borders?.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
