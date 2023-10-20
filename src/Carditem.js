import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Carditem(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="m-3 carditem "
      style={{
        width: "280px",
        height: "200px",
        boxShadow: "5px 5px 5px #f31559",
      }}
    >
      <img
        className="rounded-2"
        src={props.url}
        alt=""
        width="300px"
        height="200px"
      />
      <div className="carddetails">
        <p className="fw-bold text-white bg-transparent">{props.name} </p>
        <p className="bg-transparent text-white">{props.tech}</p>
        <Link
          className="btn btn-light rounded-5"
          to={props.link}
          target="_blank"
        >
          <i class="fa-solid fa-up-right-from-square bg-light text-dark"></i>
        </Link>
      </div>
    </div>
  );
}

export default Carditem;
