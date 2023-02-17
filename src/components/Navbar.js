import pokeBall from "../../src/assets/pokeball.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light p-0">
        <div className="container">
          <div className="navbar-brand">
            <img src={pokeBall} alt="" width="90" height="60" />
          </div>
          <Link to="/">
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
