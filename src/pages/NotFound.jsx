import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found — BEES Export';
  }, []);

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to our homepage.</p>
          <div className="not-found-buttons">
            <Link to="/" className="btn btn-primary">
              <FiHome /> Go Home
            </Link>
            <Link to="/products" className="btn btn-outline">
              <FiArrowLeft /> View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
