import React from 'react'
import './Footer.css'
import crop from '../Assets/CROP.png'
import { FaCopyright } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
    <div className="foot">
     <img src={crop} alt='logo'/><p>Copyright<FaCopyright/></p>
    </div>
    </>
  )
}
