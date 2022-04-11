import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const Example = () => {
  //destructure returned object and pass in url argument
  const { products, loading } = useFetch(
    'https://course-api.com/javascript-store-products'
  );
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
