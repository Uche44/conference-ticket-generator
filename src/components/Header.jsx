import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <img
        src="{logo}"
        alt="Logo"
      />
      <nav>
        <div className="navigation">
          <a href="#">Events</a>
          <a href="#">My Tickets</a>
          <a href="#">About Project</a>
        </div>
        <button id="cta">MY TICKETS</button>
      </nav>
    </header>
  );
};

export default Header;
