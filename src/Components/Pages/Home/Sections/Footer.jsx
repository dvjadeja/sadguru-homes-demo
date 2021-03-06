import React from "react";
import styles from "./Footer.module.scss";
import { BsArrowRight } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.brand}>
        <li>
          <span>Sadguru Homes</span>
        </li>
        <li>
          <span>Mundra, Gujarat, India 370421</span>
        </li>
        <li>
          <span>Call us: +91 98253 04952</span>
        </li>
        <li>
          <span>Jadeja Dharmendrasinh</span>
        </li>
        <li>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/sadguru_homes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.facebook.com/Sadguru-Homes-103064972414079/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook />
            </a>
            <Link to="/">
              <AiOutlineTwitter />
            </Link>
          </div>
        </li>
      </ul>

      <ul className={styles.services}>
        <li>
          <span>Services</span>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Our Team</Link>
        </li>
      </ul>

      <ul className={styles.support}>
        <li>
          <span>Support</span>
        </li>
        <li>
          <Link to="/">FAQ's</Link>
        </li>
        <li>
          <Link to="/">Support Center</Link>
        </li>
        <li>
          <Link to="/">Help Center</Link>
        </li>
      </ul>

      <ul className={styles.subscribe}>
        <li>
          <span>Subscribe</span>
        </li>
        <li>
          <p>Subscribe to get the latest news and promo from us</p>
        </li>
        <li>
          <div className={styles.subscribe_input}>
            <input type="text" placeholder="Email Address" />
            <button>
              <BsArrowRight />
            </button>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
