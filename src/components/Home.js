import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import './Home.css';

const Home = ({ onCategoryClick }) => {
  const categories = [
    { 
      id: 1, 
      title: 'Camisetas Retro', 
      imageUrl: 'https://camisfutgol.com/cdn/shop/files/3aa6f06e631edd42_90ae9c8d-d2df-4d29-b407-9bfa465baf16.jpg?v=1721852016&width=1946', 
      path: 'Retro' 
    },
    { 
      id: 2, 
      title: 'Camisetas 24/25', 
      imageUrl: 'https://www.fandomkits.net/cdn/shop/files/1736eecb.jpg?v=1716850253', 
      path: 'Camisetas2425' 
    },
    { 
      id: 3, 
      title: 'Niños', 
      imageUrl: 'https://thenewkits.com/wp-content/uploads/2024/06/b20e4ca1.jpg', 
      path: 'Kids' 
    }
  ];

  return (
    <div className="home-container">
     <div> <h1 className="categories-title">Categorías</h1>
      </div> 
     
      <div className="categories-container">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/category/${category.path}`}
            onClick={() => onCategoryClick(category)}
          >
            <CategoryCard title={category.title} imageUrl={category.imageUrl} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
