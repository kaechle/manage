import logo from "./img/logo.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="Manage Logo" />
      </div>

      <ul className="nav__menu">
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Product</a>
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
      </ul>

      <div className="nav__cta">
        <button className="main__button main__button-shadow">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
