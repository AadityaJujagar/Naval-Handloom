import { NavLink } from "react-router-dom";
import "./footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="foot-parent">
      <footer>
        <div className="footer-col">
          <p className="header">Support</p>
          <div className="items">
            <span
              style={{ padding: "7px", opacity: "0.7", color: "#fff" }}
              className="sub-items"
            >
              158, Nilam Nagar, Part-2,
              <br />
              Ambika Nagar, M.I.D.C, Solapur
            </span>
            <span style={{ padding: "7px" }} className="sub-items">
              <a
                style={{
                  textDecoration: "none",
                  opacity: "0.7",
                  color: "#fff",
                }}
                href="mailto:aadityajujagar@gmail.com"
              >
                aadityajujagar@gmail.com
              </a>
            </span>
            <span style={{ padding: "7px" }} className="sub-items">
              <a
                style={{
                  textDecoration: "none",
                  opacity: "0.7",
                  color: "#fff",
                }}
                href="tel:+919130656629"
              >
                +91 9130656629
              </a>
            </span>
          </div>
        </div>
        <div className="footer-col">
          <p className="header">Quick Navigate</p>
          <div className="items">
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fff",
                opacity: "0.7",
                padding: "7px",
              }}
              to="/"
            >
              <span className="sub-items">Home</span>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fff",
                opacity: "0.7",
                padding: "7px",
              }}
              to="/products"
            >
              <span className="sub-items">Products</span>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fff",
                opacity: "0.7",
                padding: "7px",
              }}
              to="/contact-us"
            >
              <span className="sub-items">Contact</span>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#fff",
                opacity: "0.7",
                padding: "7px",
              }}
              to="/signup"
            >
              <span className="sub-items">Signup</span>
            </NavLink>
          </div>
        </div>
        <div className="footer-col">
          <p className="header">Social Links</p>
          <div className="items">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                opacity: "0.7",
              }}
              href="/"
            >
              <FacebookOutlinedIcon />
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                opacity: "0.7",
              }}
              href="/"
            >
              <InstagramIcon />
            </a>

            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                opacity: "0.7",
              }}
              href="/"
            >
              <WhatsAppIcon />
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                opacity: "0.7",
              }}
              href="/"
            >
              <LocationOnIcon />
            </a>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>© {currentYear} Naval Handloom. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
