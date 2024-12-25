import React from "react";

const Details = ({ service }) => {
  const { title, description, features, imageUrl } = service;

  return (
    <div className="service-detail">
      <div className="service-header">
        <img src={imageUrl} alt={title} className="service-image" />
        <h1 className="service-title">{title}</h1>
      </div>
      <div className="service-content">
        <p className="service-description">{description}</p>
        <h2>Key Features:</h2>
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
