function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a
              href="https://weather-app-javascript4633.netlify.app"
              target="a_blank"
            >
              Weather
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
