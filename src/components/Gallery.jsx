import React from "react";
import ImageCard from "./ImageCard";
import "./Gallery.css";

/**
 * Gallery — Renders a responsive grid of ImageCard components.
 *
 * Uses React Fragments (<></>) to avoid adding extra DOM wrappers.
 * Uses map() to dynamically render cards from the images array.
 *
 * Props received from parent:
 *   - images (array) : array of image data objects
 */
const Gallery = ({ images }) => {
  return (
    <>
      <section className="gallery" id="gallery-section">
        <div className="gallery__grid">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              imageUrl={image.imageUrl}
              title={image.title}
              description={image.description}
              category={image.category}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
