import React from 'react';
import Nav from '../Navbar/Nav';
import Cards from './Cards';
import './Cards.css';
import Clicked from './Clicked';
import Search from './Search';
import {motion } from 'framer-motion'
export default function House() {
  return (
    <motion.div initial={{width:0}} animate={{width:'100%'}} exit ={{x:window.innerWidth,transition:{duration:0.4}}}> 
      <Nav />
      <Search />

    </motion.div>
  );
}
 