import React from "react";

const Skilltag = ({ name, icon, delay }) => {
  return (
    <div
      className="d-flex justify-content-around p-2 rounded-3  align-items-center mobileskillview "
      style={{ width: "180px", boxShadow: "1px 3px 3px #f31559" }}
      data-aos="zoom-in"
      data-aos-duration={delay}
    >
      <div className="inline-block" style={{ width: "50px" }}>
        <i class={`${icon}  fs-1`}></i>{" "}
      </div>
      <div className="inline-block" style={{ width: "130px" }}>
        {name}
      </div>
    </div>
  );
};

export default Skilltag;
