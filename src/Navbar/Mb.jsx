import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Mb(props) {
  const animate = { opacity: 0, y: -40 };
  const animateto = { opacity: 1, y: 0 };

  return (
    <>
      <nav>
        <motion.div
          className={props.na}
          animate={{
            x: 0,
          }}
          initial={{
            x: '-100vw',
          }}
          exit={{
            x: '-100vw',
          }}
          transition={{
            type: 'tween',
            delay: 0.5,
          }}
        >
          <NavLink to='/'>
            <motion.h3
              animate={animateto}
              exit={{
                y: -40,
              }}
              transition={{
                delay: 0.8,
              }}
              initial={animate}
              onClick={props.ck}
            >
              Home
            </motion.h3>
          </NavLink>
          <NavLink to='/houses'>  <motion.h3
            animate={animateto}
            exit={{
              y: -40,
            }}
            initial={animate}
            transition={{
              delay: 1.1,
            }}
            onClick={props.ck}
          >
            Houses
          </motion.h3></NavLink>

          <motion.h3
            animate={animateto}
            initial={animate}
            transition={{
              delay: 1.4,
            }}
            onClick={props.ck}
          >
            About
          </motion.h3>
          <motion.h3
            animate={animateto}
            exit={{
              y: -40, 
            }}
            transition={{
              delay: 1.5,
            }}
            initial={animate}
            onClick={props.ck}
          >
            Contact
          </motion.h3>
        </motion.div>
      </nav>
    </>
  );
}
