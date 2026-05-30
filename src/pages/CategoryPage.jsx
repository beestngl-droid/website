import React from 'react';
import { useParams, Link } from 'react-router-dom';
import categories from '../data/categories';

function CategoryPage() {
  const { category } = useParams();
  const categoryData = categories.find((c) => c.id === category);

  if (!categoryData) {
    return (
      <div className="not-found">
        <div className="container">
          <h2>Category Not Found</h2>
          <p>The category you are looking for does not exist.</p>
          <Link to="/products" className="btn btn-primary">View All Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <section className="page-banner">
        <h1>{categoryData.name}</h1>
        <p>Home / Products / {categoryData.name}</p>
      </section>

      <section className="category-content">
        <div className="container">
          <div className="category-description">
            <p>{categoryData.description}</p>
          </div>

          <div className="product-list">
            {categoryData.products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-item-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-item-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to="/enquiry" className="btn btn-sm">Send Enquiry</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="category-cta">
            <h3>Interested in {categoryData.name}?</h3>
            <p>Contact us for pricing, minimum order quantities, and sample requests.</p>
            <div className="cta-buttons">
              <Link to="/enquiry" className="btn btn-primary">Request Quote</Link>
              <Link to="/products" className="btn btn-outline">Back to All Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryPage;
