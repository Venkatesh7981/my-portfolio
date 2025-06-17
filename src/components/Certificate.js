import React from "react";

const Certificate = (props) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column m-5 rounded-4 "
      style={{
        width: "350px",
        height: "420px",
        boxShadow: "3px 3px 3px #f31559",
      }}
    >
      <div className="certificateimg">
        <img
          src={props.img}
          alt={props.title}
          style={{
            width: "320px",
          }}
        />
      </div>
      <div className="certificatedetails p-3 d-flex justify-content-center align-items-center flex-column">
        <h4 className="text-center">{props.title}</h4>
        <p className="text-center mt-2">{props.description}</p>
       
      </div>
    </div>
  );
};

export default Certificate;