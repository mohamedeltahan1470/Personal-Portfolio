import "./Footer.css";
import user_icon from "../assets/user_icon.svg";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p className="footer-description">
            I am an experienced Frontend Developer. 
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" className="user-icon" />
            <input
              type="email"
              placeholder="Email please"
              value={email}
              onChange={handleEmailChange}
              required
              className="footer-input"
            />
          </div>
          <button className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 Mohammed Ali. All rights reserved.</p>
        <div
          className="footer-bottom-right"
          style={{
            color: "#1E88E5",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <a href="#" className="footer-link">
            Terms of Service
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="https://github.com/mohamedeltahan1470"className="footer-link">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
