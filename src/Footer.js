import iconFacebook from "./img/icon-facebook.svg";
import iconYoutube from "./img/icon-youtube.svg";
import iconTwitter from "./img/icon-twitter.svg";
import iconPinterest from "./img/icon-pinterest.svg";
import iconInstagram from "./img/icon-instagram.svg";
import logoWhite from "./img/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__marketing">
        <img src={logoWhite} alt="" />
        <ul className="footer__social">
          <li>
            <a href="/">
              <img src={iconFacebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={iconYoutube} alt="YouTube" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={iconTwitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={iconPinterest} alt="Pinterest" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={iconInstagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer__nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Community</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
      </ul>
      <div className="footer__subscribe">
        <div>
          <input
            className="main__search"
            type="text"
            placeholder="Updates in your inbox ..."
          />
          <button className="main__button main__button-footer">Go</button>
        </div>
        <p>Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
