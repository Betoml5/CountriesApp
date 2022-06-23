const API_BASE = "https://restcountries.com/v2";

export const getAllCountriesAPI = async () => {
  try {
    const response = await fetch(`${API_BASE}/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCountryByNameAPI = async (name) => {
  try {
    const response = await fetch(`${API_BASE}/name/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCountryByRegionAPI = async (region) => {
  try {
    const response = await fetch(`${API_BASE}/regionbloc/${region}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCountryByCodeAPI = async (code) => {
  try {
    const response = await fetch(`${API_BASE}/alpha/${code}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
