import React, { useContext, useState, useEffect } from "react";
import "./search.css";
import { IoFilter } from "react-icons/io5";
import { AppContext } from "../utils/fetch";
import Cards from "./Cards";

export default function Search() {
  const { setse } = useContext(AppContext);
  const [val, setVal] = useState();

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    setse(val);
  }, [val, setse]);

  return (
    <div>
      <div className="kk">
        <div className="cen-se">
          <h3 style={{ fontFamily: 'poppins', fontWeight: '400' }}>SEARCH BY FILTERS<IoFilter className='filter' /></h3>
          <select onChange={handleChange} className="selc" value={val}>
            <option value="for-rent">Rent</option>
            <option value="for-sale">Buy</option>
          </select>
        </div>
      </div>
      <div className="ceny">
        <Cards />
      </div>
    </div>
  );
}
