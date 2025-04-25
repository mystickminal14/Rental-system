import React from 'react'
import './box.css'
export default function Boxes(props) {
  return (
   <div className={props.cls}>
<img src={props.image} alt='images'/>
   </div>
  )
}
