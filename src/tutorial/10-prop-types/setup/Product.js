import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  //if the image is there, give me the url, if not, be undefined
  const url = image && image.url;
  //check to see where the error is
  console.log(image, name, price);
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  //call prop types.typeOfValue.isRequired
  //this points out in the console where the undefined item is
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//default props
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
