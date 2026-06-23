import React, { useState } from "react";
import "./ImageCard.css";

/**
 * ImageCard — A reusable component that displays a single image
 * with its title, description, and category badge.
 *
 * Props received from parent:
 *   - imageUrl  (string) : path to the image
 *   - title     (string) : image title
 *   - description (string) : image description
 *   - category  (string) : category label
 */
const ImageCard = ({ imageUrl, title, description, category }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`image-card ${isLoaded ? "image-card--loaded" : ""} ${
        isHovered ? "image-card--hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={`gallery-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Image container with overlay */}
      <div className="image-card__image-wrapper">
        {/* Skeleton loader shown while image loads */}
        {!isLoaded && <div className="image-card__skeleton" />}

        <img
          className={`image-card__image ${
            isLoaded ? "image-card__image--visible" : ""
          }`}
          src={imageUrl}
          alt={title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />

        {/* Gradient overlay for text readability */}
        <div className="image-card__overlay" />

        {/* Category badge */}
        <span className="image-card__category">{category}</span>
      </div>

      {/* Card details */}
      <div className="image-card__content">
        <h2 className="image-card__title">{title}</h2>
        <p className="image-card__description">{description}</p>
      </div>
    </article>
  );
};

export default ImageCard;
