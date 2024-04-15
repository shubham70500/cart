import React from 'react';

const Product = ({ product }) => {
  const { name, price, image } = product;
  
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
};

export default Product;
