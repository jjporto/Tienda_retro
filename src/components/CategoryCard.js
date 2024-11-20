
import React from 'react';
import './CategoryCard.css'; 

const CategoryCard = ({ title, imageUrl, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="category-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default CategoryCard;

