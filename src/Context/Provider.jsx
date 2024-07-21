import React, { createContext, useState, useEffect } from 'react';
import fetchData from '../API/request';

export const MyDataContext = createContext();

export const MyDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "tvoj_api_kljuc";
  const apiUrl = "https://covid-193.p.rapidapi.com/statistics";

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData(apiKey, apiUrl);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [apiKey, apiUrl]);

  return (
    <MyDataContext.Provider value={{ data, loading, error }}>
      {children}
    </MyDataContext.Provider>
  );
};
