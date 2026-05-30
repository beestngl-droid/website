import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  return (
    <Link to={`/products/${category.id}`} className="category-card">
      <div className="category-image">
        <img src={category.image} alt={category.name} loading="lazy" />
      </div>
      <div className="category-info">
        <h3>{category.name}</h3>
        <p>{category.products.length} Products</p>
      </div>
    </Link>
  );
}

export default CategoryCard;
