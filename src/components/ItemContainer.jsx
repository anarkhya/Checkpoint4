/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';
import ItemData from '../data/ItemData';

const ItemContainer = () => {
  return (
    <div>
      <div className="card-container-header">
        <h1>Colors</h1>
        <button type="button">button</button>
      </div>
      <div className="card-container">
        {ItemData.map((data) => (
          <Item key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ItemContainer;
