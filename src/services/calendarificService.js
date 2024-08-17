import axios from 'axios';
import config from '../config/config.js';

export const getHolidays = async (country, year) => {
  const url = `${config.apiUrl}/holidays?api_key=${config.apiKey}&country=${country}&year=${year}`;
  const response = await axios.get(url);
  return response.data;
};

export const getCountries = async () => {
  const url = `${config.apiUrl}/countries?api_key=${config.apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
