import React from "react";
import { Link, Redirect, Navigate } from "react-router-dom";
function Contactinfo() {
  return (
    <div
      className="d-flex flex-column  justify-content-center align-items-center mobileview"
      style={{ width: "40%" }}
    >
      <div
        data-aos="flip-right"
        data-aos-duration="500"
        className="contactitem p-3"
      >
        <Link
          to="https://www.linkedin.com/in/leelasarath-baswa"
          target="_blank"
        >
          {" "}
          <i className="fa-brands fa-linkedin fa-2x  m-2"></i>{" "}
        </Link>
        <h6>Linkedin</h6>

        <Link
          to="https://www.linkedin.com/in/leelasarath-baswa"
          target="_blank"
          style={{ textDecoration: "none", color: "#F31559" }}
        >
          Connect with me
        </Link>
      </div>
      <div
        data-aos="flip-left"
        data-aos-duration="500"
        data-aos-delay="500"
        className="contactitem p-3"
      >
        <Link to="mailto:leelasarathbaswa@gmail.com">
          <i className="fa-solid fa-envelope fa-2x  m-2"></i>
        </Link>
        <h6>Email</h6>

        <Link
          to="mailto:leelasarathbaswa@gmail.com"
          style={{ textDecoration: "none", color: "#F31559" }}
        >
          Write me
        </Link>
      </div>
      <div
        data-aos="flip-right"
        data-aos-duration="500"
        data-aos-delay="1000"
        className="contactitem p-3"
      >
        <Link to="https://wa.me/918074135072" target="_blank">
          <i className="fa-brands fa-whatsapp fa-2x  m-2 "></i>
        </Link>
        <h6>Whatsapp</h6>

        <Link
          to="https://wa.me/918074135072"
          target="_blank"
          style={{ textDecoration: "none", color: "#F31559" }}
        >
          Message me
        </Link>
      </div>{" "}
    </div>
  );
}

export default Contactinfo;
