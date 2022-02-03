/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';
// import ItemData from '../data/ItemData';

const ItemContainer = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    axios.get('./data/itemData.json').then((res) => {
      setItemData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="card-container-header">
        <h1>Coloured Floppies</h1>
      </div>
      <div className="card-container">
        {itemData.map((data) => (
          <Item key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ItemContainer;
