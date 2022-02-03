/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// import ItemData from '../data/ItemData';

const Item = ({ data }) => {
  return (
    <div className="card">
      <img src={data.src} alt={data.alt} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <Link to="/ItemDetails">
        <button type="button">view more</button>
      </Link>
    </div>
  );
};

export default Item;
