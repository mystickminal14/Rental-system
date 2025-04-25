import React from "react";
import "./Nav.css";
import Nav from "./Nav";
import Hero from "./Hero";
import {easeIn, motion} from 'framer-motion'
import Modern from "./Modern";
import Footer from "./Footer";
export default function Home() {
  return (
    <motion.div initial={{width:0}} animate={{width:'100%'}} exit ={{x:window.innerWidth,transition:{duration:0.4}}}>
      <Nav />
      <Hero />
      <Modern />
      <Footer />
    </motion.div>
  );
}
