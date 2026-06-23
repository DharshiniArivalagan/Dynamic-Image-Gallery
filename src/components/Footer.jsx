import React from "react";
import "./Footer.css";

/**
 * Footer — Simple footer with credits.
 */
const Footer = () => {
  return (
    <footer className="footer" id="app-footer">
      <div className="footer__content">
        <p className="footer__text">
          Crafted with <span className="footer__heart">♥</span> using{" "}
          <span className="footer__highlight">React</span>
        </p>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Lumina Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
