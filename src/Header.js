import headerIllustration from "./img/illustration-intro.svg";

const Header = (props) => {
  return (
    <header>
      <div className="header__copy">
        <h1>{props.title}</h1>
        <p>{props.intro}</p>
        <button className="main__button main__button-shadow">
          Get Started
        </button>
      </div>
      <div className="header__illustration">
        <img src={headerIllustration} alt="Illustration" />
      </div>
    </header>
  );
};

export default Header;
