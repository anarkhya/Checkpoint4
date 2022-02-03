/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

const ItemDetails = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState();

  useEffect(() => {
    axios.get('/data/itemData.json').then((res) => {
      const data = res.data.filter((item) => item.id === parseInt(id, 10));
      setItemData(...data);
    });
  }, [id]);

  return (
    <div>
      <Header />
      <div className="card-container">
        <div className="card">
          <img src={itemData && itemData.src} alt={itemData && itemData.alt} />
          <h2>{itemData && itemData.title}</h2>
          <p className="detailed">{itemData && itemData.detailed}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
