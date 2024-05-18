import React from "react";
import "./landing.css";
const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "black", color: "white", padding: "20px 0" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div>
          <p className="footer-link">Connect with us</p>
          <div>
            <p className="footer-link">For Banks</p>
            <p className="footer-link">For Business</p>
            <p className="footer-link">For Partners</p>
            <p className="footer-link">About Carbonplace</p>
            <p className="footer-link">How It Works</p>
            <p className="footer-link">Leadership Team</p>
            <p className="footer-link">Latest News</p>
            <p className="footer-link">Careers</p>
            <p className="footer-link">Contact</p>
            <p className="footer-link">Book a demo</p>
          </div>
        </div>
        <div>
          <p>© Pinecone Labs 2024</p>

          <div>
            <p className="footer-link">Privacy Policy</p>
            <p className="footer-link">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
