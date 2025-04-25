import React from 'react'

import './Nav.css'
import { NavLink } from 'react-router-dom'
export default function Normalnav(props) {
  return (
    <>
    <nav>
    <div className={props.na}>
   <NavLink className={props.link} to='/'><h3  >Home</h3></NavLink> 
    <NavLink to="/houses" className={props.link}><h3 >Houses</h3></NavLink>
    <h1  className="kai">KaiZenLiving</h1>
    <h3 >About</h3>
    <h3  >Contact</h3>
   
</div>
    </nav>
    </>
  )
}

