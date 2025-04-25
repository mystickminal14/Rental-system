import React,{useState} from 'react'
import {CgMenuLeftAlt} from 'react-icons/cg'
import {CgClose} from 'react-icons/cg'

import './Nav.css'
import Mb from './Mb'
import { AnimatePresence } from 'framer-motion'
export default function MobileNAV() {
    const[open,setOpen]=useState(false)
    const op=<CgMenuLeftAlt onClick={()=>{
        setOpen(true)
    }} className='ic'/>
    const close=<CgClose onClick={()=>{
        setOpen(false)
    }} className='ic'/>
    const ck=()=>{
        setOpen(false)
    }
  return (
    <>
{open ? close:op}
<AnimatePresence>{ open && <Mb na=' nav2' ck={ck}/>}
 
    </AnimatePresence>
    </>
  )
}
