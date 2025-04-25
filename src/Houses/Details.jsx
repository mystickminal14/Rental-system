import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import Carosel from './Carosel';
import { useParams } from 'react-router-dom';
import { AppContext } from '../utils/fetch';
export default function Details() {
  const { giveId,showid,detId } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    giveId(id);
  }, [giveId, id]);

  return (
    <div>
<Carosel detId={detId}/>
    </div>
  );
}
