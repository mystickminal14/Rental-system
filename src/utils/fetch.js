import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AppContext = createContext();

export const baserl = 'https://bayut.p.rapidapi.com';

export const AppProvider = ({ children }) => {
  const [se, setse] = useState(); 

  const rental = `${baserl}/properties/list?locationExternalIDs=5002&purpose=${se}&hitsPerPage=6`;

  const [propertyData, setPropertyData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
          locationExternalIDs: '5002,6020',
          purpose: se, 
          hitsPerPage: '25',
          page: '0',
          lang: 'en',
          sort: 'city-level-score',
          rentFrequency: 'monthly',
          categoryExternalID: '4',
        },
        headers: {
          'X-RapidAPI-Key': '0bd7ba879cmshb0173448b293dc3p16a4cdjsn0c2e12ada037',
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
      };
  
      try {
        const response = await axios.request(options);
        setPropertyData(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    }
   
      fetchData();

  }, [se]);
const [showid,giveId]=useState()
  const [detId, getDet] = useState();
  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/detail',
    params: {
      externalID: '4937770',
    },
    headers: {
      'X-RapidAPI-Key': '0bd7ba879cmshb0173448b293dc3p16a4cdjsn0c2e12ada037',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };

  async function fetDet() {
    try {
      const response = await axios.request(options);
      getDet(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetDet();
  },[]); 

  return (
    <AppContext.Provider value={{ propertyData, se, setse,giveId, showid,detId}}>
      {children}
    </AppContext.Provider>
  );
};
