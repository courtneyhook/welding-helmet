import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about-me"
            className={
              currentPage === "/about-me" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={
              currentPage === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Nav;
