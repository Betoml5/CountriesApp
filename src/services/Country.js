const API_BASE = "https://restcountries.com/v3.1";

export const getAllCountriesAPI = async () => {
  try {
    const response = await fetch(`${API_BASE}/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCoutryByName = async (name) => {
  try {
    const response = await fetch(`${API_BASE}/name/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCoutryByRegion = async (region) => {
  try {
    const response = await fetch(`${API_BASE}/region/${region}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
