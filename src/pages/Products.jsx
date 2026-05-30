import React from 'react';
import CategoryCard from '../components/CategoryCard';
import categories from '../data/categories';

function Products() {
  return (
    <div className="products-page">
      <section className="page-banner">
        <h1>Our Export Products</h1>
        <p>Home / Products</p>
      </section>

      <section className="products-intro">
        <div className="container">
          <p className="intro-text">We export a diverse range of premium Indian products to international markets. Browse our categories below and send us an enquiry for pricing and samples.</p>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
