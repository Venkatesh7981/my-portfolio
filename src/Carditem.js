import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImInfo } from "react-icons/im";
import Modal from "./Modal";
import AOS from "aos";
import "aos/dist/aos.css";

function Carditem(props) {
  // console.log("in carditem", props.id);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="m-3 carditem rounded-3"
        style={{
          width: "280px",
          height: "200px",
          boxShadow: "3px 3px 3px #f31559",
        }}
      >
        <img
        
          src={props.url}
          alt=""
          width="300px"
          height="200px"
        />
        <div className="carddetails">
          {/* <div
            className="bg-transparent"
            style={{ position: "absolute", top: "5%", right: "5%" }}
          >
            <ImInfo
              className="bg-transparent"
              data-bs-toggle="modal"
              data-bs-target={`#${props.id}`}
              style={{ fontSize: "20px" }}
            />
          </div> */}
          <p className="fw-bold text-white bg-transparent">{props.name} </p>
          <Link
            className="btn btn-light rounded-5"
            // to={props.link}
            to={`/project/${props.id}`}
          >
            <i class="fa-solid fa-up-right-from-square bg-light text-dark"></i>
          </Link>
        </div>
      </div>
      {/* <Modal name={props.name} description={props.description} id={props.id} /> */}
    </div>
  );
}

export default Carditem;
