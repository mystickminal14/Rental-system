import React, { useContext, useState } from 'react';
import axios from 'axios';
import { FaBed } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import Button from "@mui/material/Button";
import { AiOutlineExpand } from 'react-icons/ai';
import { FaBath } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import Clicked from './Clicked';
import { AppContext } from '../utils/fetch';

import ReactPaginate from 'react-paginate'
export default function Cards() {
  const { propertyData } = useContext(AppContext);
  const[page,setPage]=useState(1)
  const perPage=3

  const start = page * perPage;
  const end = start + perPage;
  const displayUser = propertyData.slice(start, end);

 
  const [selectedProperty, setSelectedProperty] = useState(null);
 
  const clicked = (property) => {

    setSelectedProperty(property);
 
  }

  const cros = () => {
    setSelectedProperty(null);

  }
const pageCount=Math.ceil(propertyData.length/perPage)
  return (
    <div className="flex">
      {displayUser.map((property,index) => (
        <div className="cardss" key={index}>
          <img src={property.coverPhoto.url} alt="Property" />
          <div className="titles">
            <h2>{property.price} AED</h2>
            <img src={property.agency.logo.url} alt='logo' width='35px' height='35px' />
          </div>
          <div className="det">
            <h4>{property.rooms} <span></span><FaBed className='i' /></h4>
            <h4 className='bor'>{property.baths}<FaBath className='i' /></h4>
            <h4 className='bor'>{property.randBoostScore
} <AiFillAppstore className='i' /></h4>
          </div>
          <div className="para">
            <h5>
              {property.title.length >= 30
                ? `${property.title.substring(0, 25)}...`
                : property.title
              }
            </h5>
            <Button
              className='expand'
              onClick={() => clicked(property)}
              variant="contained"
              style={{ background: "blueviolet", color: "white" }}
              endIcon={<AiOutlineExpand className='i1' />}
            >
              EXPAND
            </Button>
          </div>
        </div>
      ))}
       {page>=0 && <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={({ selected }) => {
          setPage(selected);  
        }}
        containerClassName={'paginationBtns'}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'disabledbtn'}
        activeClassName={'activeP'}
      />}
      <AnimatePresence>
        {selectedProperty && (
          
          <Clicked props={cros} id={selectedProperty.id} property={selectedProperty} />
        )}
      </AnimatePresence>

    </div>
  );
}
