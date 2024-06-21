import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
import auth from "../../utils/auth";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul className="nav-bar">
        <li className="nav-link">
          <NavLink
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Gallery
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="about-me"
            className={
              currentPage === "/about-me" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="contact"
            className={
              currentPage === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
        {auth.loggedIn() ? (
          <li className="nav-link">
            <a className="logout-link" href="/" onClick={() => auth.logout()}>
              Logout
            </a>
          </li>
        ) : null}
      </ul>
    </>
  );
}

export default Nav;
