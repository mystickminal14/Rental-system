import React from 'react'

import './Nav.css'

import Normalnav from './Normalnav'
import MobileNAV from './MobileNAV'
export default function Nav() {
  return (
    <>
   <Normalnav na='nav' link='link'/>
   <MobileNAV/>
    </>
  )
}
