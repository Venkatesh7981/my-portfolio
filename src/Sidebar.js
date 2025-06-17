import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar(props) {
  const [color, setcolor] = useState("black");
  const [active, setactive] = useState("Home");
  const location = useLocation();
  const name= "{VENKATESH}";
  useEffect(() => {
    props.theme === "lighttheme" ? setcolor("black") : setcolor("white");
  }, [props.theme]);
 useEffect(() => {
  if (location.pathname.includes("project")) {
    setactive("projects");
  } else {
    setactive(location.pathname.substring(1));
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [location.pathname]);

  return (
    <div
      class={`d-flex flex-column sidebar flex-shrink  ${props.theme}`}
      style={{
        height: "95%",
        position: "fixed",
        overflow: "hidden",
        width: "18%",
        // border: "1px solid grey",
        margin: "15px 0px 0px 10px",
        boxShadow: "1px 3px 5px #f31559",
        borderRadius: "10px",
      }}
    >
      <h3
        className="text-center fw-bold mt-4 "
        style={{
          color: "#f31559",
          fontFamily: "Poetsen One",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        {name}
      </h3>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div style={{ maxHeight: "70vh" }}>
          <ul className="nav nav-pills flex-column mb-auto sidebarul">
            <li>
              <NavLink
                to="/"
                // activeClassName="active"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#f31559" : color,
                    textDecoration: "none",
                  };
                }}
                class="navitem"
                aria-current="page"
              >
                {/* <i class="m-2 fa-solid fa-house"></i>Home */}
                <i
                  className={`m-2 navicon fa-solid fa-house  ${
                    active === "" ? "text-danger" : ""
                  }`}
                ></i>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#f31559" : color,
                    textDecoration: "none",
                  };
                }}
                class=" navitem"
              >
                <i
                  className={`m-2 navicon fa-solid fa-user ${
                    active === "about" ? "text-danger" : " "
                  }`}
                ></i>{" "}
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                // style={({ isActive }) => {
                //   return {
                //     color: isActive ? "#f31559" : color,
                //     textDecoration: "none",
                //   } ,

                // } }
                style={{
                  color: active === "projects" ? "#f31559" : color,
                  textDecoration: "none",
                }}
                class="  navitem"
              >
                <i
                  className={`m-2 fa-solid navicon fa-briefcase  ${
                    active === "projects" ? "text-danger" : " "
                  }`}
                ></i>{" "}
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#f31559" : color,
                    textDecoration: "none",
                  };
                }}
                class="  navitem"
              >
                <i
                  className={`m-2 fa-solid fa-lightbulb  ${
                    active === "skills" ? "text-danger" : " "
                  }`}
                ></i>{" "}
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/certifications"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#f31559" : color,
                    textDecoration: "none",
                  };
                }}
                class="  navitem"
              >
                <i
                  className={`m-2 fa-solid fa-certificate ${
                    active === "certifications" ? "text-danger" : " "
                  }`}
                ></i>{" "}
                Certifications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#f31559" : color,
                    textDecoration: "none",
                  };
                }}
                class="navitem"
              >
                <i
                  className={`m-2 fa-solid navicon fa-address-book ${
                    active === "contact" ? "text-danger" : " "
                  }`}
                ></i>{" "}
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
