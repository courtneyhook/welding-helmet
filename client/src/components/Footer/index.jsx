import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <h6>
        ©Title of Website, All Rights Reserved.
        <Link to="/admin"> Admin Login</Link>
      </h6>
    </>
  );
};

export default Footer;
