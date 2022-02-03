/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../components/Header';
import Item from '../components/Item';

const ItemDetails = ({ data }) => {
  return (
    <div>
      <Header />
      details of item
      <Item key={data.id} data={data} />
    </div>
  );
};

export default ItemDetails;
