import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./carosel.css";

export default function Carosel({ detId }) {
  const [detIds, setDetIds] = useState({});

  useEffect(() => {
    setDetIds(detId);
  }, [detId]);

 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 804 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 200 },
      items: 1,
    },
  };

  return (
    <div className="con">
      <motion.div className="carosel">
        <div className="car">
          <Carousel
            className="gap"
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1200}
          >
            {detIds.coverPhoto && (
              <div className="items">
                <img src={detIds.coverPhoto.url} alt="image" />
              </div>
            )}
            {detIds.photos &&
              detIds.photos.length > 0 &&
              detIds.photos.map((photo, index) => (
                <div className="items" key={index}>
                  <img src={photo.url} alt={`img${index}`} />
                </div>
              ))}
            <div className="items">
              <img
                src="https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
            </div>
          </Carousel>
        </div>

        <div className="twoBoxes">
          <div className="left">
            <h1 className="purpose">{detIds.purpose}</h1>

            <h1 className="pri">{detIds.price} AED</h1>
            <div className="sood">
              <span>Product: {detIds.product}</span>
            </div>
            {detIds.location && (
              <div className="sood">
                <span>location: {detIds.location[0].name}</span>
                <span>area: {detIds.area} sq.ft</span>
              </div>
            )}
          </div>
          <div className="right">
            <h5>{detIds.title}</h5>
            <p className="g">{detIds.description}</p>
          </div>
        </div>
        <div className="agency">
          <div className="aL">
            <h2>AGENCY DETAILS</h2>
            {detIds.agency && (
              <>
                <h3>{detIds.agency.name}</h3>
                {detIds.agency.logo && (
                  <div className="smallI">
                    <img src={detIds.agency.logo.url} alt="logo" />
                  </div>
                )}
                <span>Product: {detIds.product}</span>
              </>
            )}
          </div>
          <div className="contact">
            <h3>Contact-details</h3>
            <h3>contactName: {detIds.contactName}</h3>
            <h4>ownerId: {detIds.ownerID}</h4>
            <h4>referenceNumber: {detIds.referenceNumber}</h4>
            {detIds.phoneNumber && (
              <>
                <h4>mobile: {detIds.phoneNumber.mobile}</h4>
                <h4>phone: {detIds.phoneNumber.phone}<br /></h4>
                <h4>whatsapp: {detIds.phoneNumber.whatsapp}<br /></h4>
                <h4>proxyMobile: {detIds.phoneNumber.proxyMobile}</h4>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
