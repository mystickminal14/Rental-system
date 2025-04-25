import "./Nav.css";
import {motion} from 'framer-motion'
import Button from "@mui/material/Button";
import ExploreIcon from "@mui/icons-material/Explore";
import building from "../Assets/ig.jpg";
import'./hero.css'
import { BsInstagram,BsTwitter,BsFacebook } from "react-icons/bs";
export default function Hero() {
  return (
    <>
      <div className="landing">
        <motion.div className="texts"
                                     animate={{
                                      x:0,
                                      opacity:1
                                     }}
                                     initial={{
                                      x:-250,
                                      opacity:0.6
                                     }}
                                     transition={{
                                      duration:0.8,
                                      delay:0.4,
                                      ease:'easeIn'
                                     }}>
          <h1>
          
            Lease
            <br />
            Luxuriate, <br />
            Love Your Space!
          </h1>
          <div className="btns">
            <Button
              variant="contained"
              style={{ background: "rgb(37, 98, 98)", color: "white" }}
              endIcon={<ExploreIcon />}
            >
              Explore
            </Button>
            <Button
              variant="contained"
              style={{ background: "rgb(37, 98, 98)", color: "white" }}
            >
              Know more about us
            </Button>

          </div>
          <div className="icons">
            <BsInstagram   className='socials'/>
            <BsTwitter className='socials'/>
            <BsFacebook className='socials'/>
          </div>
        </motion.div>
        <motion.div className="image"  animate={{
                                      x:0,
                                      opacity:1
                                     }}
                                     initial={{
                                      x:350,
                                      opacity:0.7
                                     }}
                                     transition={{
                                  duration:0.9,
                                  delay:0.5,
                                  ease:'easeIn'
                                     }}>
          <img src={building} alt="landing home image" />
        </motion.div>
      </div>
    </>
  );
}