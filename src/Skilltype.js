import React from "react";

function Skilltype(props) {
  return (
    <div
      onClick={() => {
        props.func(props.type);
      }}
      className="skill p-2 m-2"
      style={{ boxShadow: "1px 3px 3px #f31559" }}
    >
      <div>
        <i className={props.icon1} style={{ color: "#F31559" }}></i>
        <span>{props.type}</span>
      </div>
      {props.type === props.current ? (
        <i className="fa-solid fa-angle-down colorclass"></i>
      ) : (
        <i className="fa-solid fa-angle-right colorclass"></i>
      )}
    </div>
  );
}

export default Skilltype;
