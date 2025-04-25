import React ,{useState}from "react";
import Button from "@mui/material/Button";
import { AiFillEye } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { AiFillCloseSquare } from 'react-icons/ai';
import { motion } from 'framer-motion';
import "./Cards.css";
import { Link } from "react-router-dom";

export default function Clicked({ props, property,id }) {

  const initial = {
    x: -5000,
    y: -100,
    opacity: [0.3, 0.7, 1],
    rotate: '360deg'
  };

  const final = {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
  };

  const exit = {
    x: -5000,
    opacity: 0,
    y: -100,
    rotate: '360deg'
  };
  

  return (
    <motion.div className="s" animate={{opacity:1}}>
        <motion.div className="cl" initial={initial} key={property.id}
          animate={final}
          exit={exit}
          transition={{ duration: 1 }}>
          <div className="bi">
            <div className="imageBox">
              <img
                src={property.coverPhoto.url}
                className="imag"
                alt="image"
              />
            </div>
            <div className="vv">
              <h4>
                {property.rooms} <span></span>
                <FaBed className="i" />
              </h4>
              <h4 className="bor1">
                {property.baths} <FaBath className="i" />
              </h4>
              <h4 className="bor1">
                {property._geoloc.lng}sq.ft <AiFillAppstore className="i" />
              </h4>
            </div>
          </div>
          <div className="idio">
            <h2>{property.price} AED</h2>
            <p className="paragraphs">
              {property.title}
            </p>
            <Button
              className="expand2"
              variant="contained"
              style={{ background: "darkslategray", color: "white" }}
              endIcon={<AiFillEye className="i1" />}
            >
              <Link to={`/houses/${property.id}`} style={{color:'white'}}>
              VIEW MORE</Link>
            </Button>
            <AiFillCloseSquare onClick={props} className="cross" />
          </div>
        </motion.div>

    
    </motion.div>
  );
}
