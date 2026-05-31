import React, { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import PageBanner from '../components/PageBanner';
import RevealOnScroll from '../components/RevealOnScroll';
import categories from '../data/categories';
import { FiSearch, FiLayers } from 'react-icons/fi';

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    document.title = 'Products — BEES Export Company';
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Group Categories into dynamic trade sectors
  const getCategorySector = (categoryId) => {
    const foodBeverage = ['spices-masala', 'ayurveda', 'tea-coffee', 'oils', 'marine-products', 'agricultural'];
    const textilesCrafts = ['carpets', 'garments', 'handicrafts'];
    const industrial = ['leather', 'rubber'];

    if (foodBeverage.includes(categoryId)) return 'food';
    if (textilesCrafts.includes(categoryId)) return 'textiles';
    if (industrial.includes(categoryId)) return 'industrial';
    return 'other';
  };

  // Filter categories based on search input and active tab
  const filteredCategories = categories.filter((category) => {
    if (activeTab !== 'all' && getCategorySector(category.id) !== activeTab) {
      return false;
    }
    const matchesSearch = 
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.products.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="products-page">
      <PageBanner 
        title="Global Export Portfolio" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products' }
        ]} 
      />

      <RevealOnScroll>
        <section className="products-intro">
          <div className="container">
            <p className="intro-text">
              Explore our curated export portfolios spanning organic agriculture, premium spices, luxury rugs, and industrial supplies. Sourced from certified Indian producers and processed to international phytosanitary standards.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {/* Filter and Search Interface */}
      <div className="filter-search-container">
        <div className="search-box-wrapper">
          <FiSearch className="search-icon-svg" />
          <input 
            type="text" 
            placeholder="Search categories, spices, crops, rugs, or materials..." 
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search export catalog"
          />
        </div>

        <div className="filter-tabs" role="tablist">
          <button 
            className={`filter-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabChange('all')}
            role="tab"
            aria-selected={activeTab === 'all'}
          >
            All Portfolios ({categories.length})
          </button>
          <button 
            className={`filter-tab-btn ${activeTab === 'food' ? 'active' : ''}`}
            onClick={() => handleTabChange('food')}
            role="tab"
            aria-selected={activeTab === 'food'}
          >
            Food &amp; Beverage (6)
          </button>
          <button 
            className={`filter-tab-btn ${activeTab === 'textiles' ? 'active' : ''}`}
            onClick={() => handleTabChange('textiles')}
            role="tab"
            aria-selected={activeTab === 'textiles'}
          >
            Textiles &amp; Crafts (3)
          </button>
          <button 
            className={`filter-tab-btn ${activeTab === 'industrial' ? 'active' : ''}`}
            onClick={() => handleTabChange('industrial')}
            role="tab"
            aria-selected={activeTab === 'industrial'}
          >
            Industrial Goods (2)
          </button>
        </div>
      </div>

      <RevealOnScroll>
        <section className="categories-section" style={{ paddingTop: 0 }}>
          <div className="container">
            {filteredCategories.length > 0 ? (
              <div className="categories-grid">
                {filteredCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <FiLayers className="empty-state-icon" />
                <h3>No portfolios match your criteria</h3>
                <p>Try adjusting your search terms or selecting a different tab.</p>
              </div>
            )}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}

export default Products;
