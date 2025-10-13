import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link"; // Import Next.js Link component
import "./footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      {/* Logo */}
      <div className="footer-logo">
        <Link href="/">Vehicle App</Link> {/* Optional: Make logo clickable to homepage */}
      </div>

      {/* Navigation */}
      <nav className="footer-nav">
        <Link href="/about" className="footer-link">About</Link>
        <Link href="/contact" className="footer-link">Contact</Link>
        <Link href="/privacy" className="footer-link">Privacy Policy</Link>
      </nav>

      {/* Social Media */}
      <div className="footer-social flex justify-center">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Battery App. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;