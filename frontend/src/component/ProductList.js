import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">
        {/* {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Product product={product} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ProductList;
