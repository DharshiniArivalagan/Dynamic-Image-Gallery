import React from "react";
import "./Header.css";

/**
 * Header — App header with logo, title, subtitle, and image count.
 *
 * Props:
 *   - imageCount (number) : total number of images in the gallery
 */
const Header = ({ imageCount }) => {
  return (
    <>
      <header className="header" id="app-header">
        {/* Decorative glow orbs */}
        <div className="header__glow header__glow--1" aria-hidden="true" />
        <div className="header__glow header__glow--2" aria-hidden="true" />

        <div className="header__content">
          {/* Logo */}
          <div className="header__logo" aria-label="Lumina Gallery Logo">
            <svg
              className="header__logo-icon"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="32"
                height="32"
                rx="8"
                stroke="url(#logo-gradient)"
                strokeWidth="2.5"
              />
              <circle cx="13" cy="13" r="3" fill="url(#logo-gradient)" />
              <path
                d="M4 26 L12 18 L18 22 L24 14 L32 22 L32 30 C32 31.66 30.66 33 29 33 L7 33 C5.34 33 4 31.66 4 30 Z"
                fill="url(#logo-gradient)"
                opacity="0.6"
              />
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0"
                  y1="0"
                  x2="36"
                  y2="36"
                >
                  <stop stopColor="#a78bfa" />
                  <stop offset="1" stopColor="#6d28d9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Title */}
          <h1 className="header__title">
            <span className="header__title-gradient">Lumina</span> Gallery
          </h1>

          <p className="header__subtitle">
            Discover breathtaking landscapes from around the world — curated for
            the wandering soul.
          </p>

          {/* Stats badge */}
          <div className="header__stats">
            <span className="header__stats-dot" />
            <span className="header__stats-text">
              {imageCount} {imageCount === 1 ? "Photograph" : "Photographs"}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
