import React, { useEffect } from 'react';
import Boxes from './Boxes';
import './box.css';
import img1 from '../Assets/r1.jpg';
import img2 from '../Assets/r2.jpg';
import img3 from '../Assets/r3.jpg';
import img4 from '../Assets/r4.jpg';
import img5 from '../Assets/r5.jpg';
import { motion,useAnimation } from 'framer-motion';
import img6 from '../Assets/r6.jpg';
import { useInView } from 'react-intersection-observer';
export default function Modern() {

const {ref,inView}=useInView()
const ani=useAnimation()
useEffect(() => {


  if (inView) {
    ani.start({
      opacity: 1,
      transition: {
        ease: 'easeIn',
        delay: 1
      }
    });
  } else {
    ani.start({
      opacity: 0
    });
  }
}, [inView]);

  return (
    <>
      <div className="on">
        <h1 className='title' style={{ textAlign: 'center', fontFamily: 'righteous' }}>Modern rooms</h1>
        <motion.div animation={ani}className="container" ref={ref}>
          <div >
            <Boxes image={img1} cls='box' />
          </div>
          <div>
            <Boxes image={img2} cls='box pg' />
          </div>
          <div >
            <Boxes image={img3} cls='box dyn' />
          </div>
          <div >
            <Boxes image={img4} cls='box fy1' />
          </div>
          <div >
            <Boxes image={img5} cls='box fy' />
          </div>
          <div >
            <Boxes image={img6} cls='box di' />
          </div>

          <button className='center'>CHECK HOUSES</button>
        </motion.div>
        <p>Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world." – Franklin D. Roosevelt</p>
      </div>
    </>
  )
}
