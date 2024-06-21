import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <>
      <h6 className="footer-nav">
        ©Centerline Fab, All Rights Reserved.
        <Link to="/admin" className="footer-admin">
          {" "}
          Admin Login
        </Link>
      </h6>
    </>
  );
};

export default Footer;
