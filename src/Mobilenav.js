import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Mobilenav(props) {
  const [active, setactive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setactive(location.pathname.substring(1));
  }, [location.pathname]);
  return (
    <div className={`bottomnavbar ${props.theme}`}>
      <Link to="/">
        <i
          className={`m-2 navicon fa-solid fa-house fa-2x ${
            active === "" ? "text-danger" : ""
          }`}
        ></i>
      </Link>

      <Link to="/about">
        <i
          className={`m-2 navicon fa-solid fa-user fa-2x ${
            active === "about" ? "text-danger" : " "
          }`}
        ></i>
      </Link>

      <Link to="/projects">
        <i
          className={`m-2 fa-solid navicon fa-briefcase fa-2x ${
            active === "projects" ? "text-danger" : " "
          }`}
        ></i>
      </Link>
      <Link to="/skills">
        <i
          className={`m-2 fa-solid fa-lightbulb fa-2x ${
            active === "skills" ? "text-danger" : " "
          }`}
        ></i>
      </Link>
      <Link to="/certifications">
        <i
          className={`m-2 fa-solid fa-certificate fa-2x ${
            active === "certifications" ? "text-danger" : " "
          }`}
        ></i>
      </Link>

      <Link to="/contact">
        <i
          className={`m-2 fa-solid navicon fa-address-book fa-2x ${
            active === "contact" ? "text-danger" : " "
          }`}
        ></i>
      </Link>
    </div>
  );
}

export default Mobilenav;
