import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footerLLlogo">
        JAKOB
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experince">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/jakob.a.sandberg">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/jakobsandberg/">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/Sandberg20">
          <AiFillTwitterCircle />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
