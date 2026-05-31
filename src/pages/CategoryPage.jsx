import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiArrowRight } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import RevealOnScroll from '../components/RevealOnScroll';
import categories from '../data/categories';

function CategoryPage() {
  const { category } = useParams();
  const categoryData = categories.find((c) => c.id === category);

  useEffect(() => {
    document.title = categoryData 
      ? `${categoryData.name} — BEES Export Company` 
      : 'Portfolio Not Found — BEES Export';
  }, [categoryData]);

  if (!categoryData) {
    return (
      <div className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <span className="not-found-code">404</span>
            <h2>Portfolio Not Found</h2>
            <p>The product category you are looking for does not exist in our registry.</p>
            <Link to="/products" className="btn btn-primary">
              <FiArrowLeft /> View All Portfolios
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <PageBanner 
        title={categoryData.name} 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Portfolios', path: '/products' },
          { label: categoryData.name }
        ]} 
      />

      <RevealOnScroll>
        <section className="category-content">
          <div className="container">
            <div className="category-description">
              <p>{categoryData.description}</p>
            </div>

            <div className="product-list">
              {categoryData.products.map((product, index) => (
                <RevealOnScroll key={product.id} delay={index * 80}>
                  <div className="product-item">
                    <div className="product-item-image">
                      <img src={product.image} alt={`${product.name} packaging`} loading="lazy" />
                    </div>
                    <div className="product-item-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <Link to="/enquiry" className="btn btn-sm btn-primary">
                        <FiMail /> Request Specifications
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="category-cta">
              <h3>Interested in bulk imports of {categoryData.name}?</h3>
              <p>We supply wholesale orders, custom blends, private branding, and express sample dispatch.</p>
              <div className="cta-buttons">
                <Link to="/enquiry" className="btn btn-primary">
                  Get Bulk Quote <FiArrowRight />
                </Link>
                <Link to="/products" className="btn btn-outline">
                  <FiArrowLeft /> Other Portfolios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}

export default CategoryPage;
