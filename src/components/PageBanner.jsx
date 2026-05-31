import React from 'react';
import { Link } from 'react-router-dom';

function PageBanner({ title, breadcrumbs = [] }) {
  return (
    <section className="page-banner">
      <h1>{title}</h1>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {index > 0 && <span className="breadcrumb-sep"> / </span>}
            {crumb.path ? (
              <Link to={crumb.path} className="breadcrumb-link">{crumb.label}</Link>
            ) : (
              <span className="breadcrumb-current">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
    </section>
  );
}

export default PageBanner;
