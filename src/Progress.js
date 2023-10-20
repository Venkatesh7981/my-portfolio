import React from "react";

function Progress(props) {
  return (
    <div style={{ margin: "20px 0 20px 0 " }}>
      <div
        className="d-flex text-white justify-content-between m-0"
        style={{ padding: "0 1% 0 1%", height: "25px" }}
      >
        <p>{props.language}</p>
        <p>{props.percent}</p>
      </div>
      <div className="progress m-0">
        <div
          className={`colorbg initial ${props.animate}`}
          style={{ width: props.percent, borderRadius: "5px" }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
