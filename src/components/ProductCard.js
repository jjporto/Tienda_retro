import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img 
        src={product.imageUrl || '/default-image.jpg'} 
        alt={product.name} 
        loading="lazy" 
      />
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
      <button>Comprar</button>
    </div>
  );
};

export default ProductCard;
