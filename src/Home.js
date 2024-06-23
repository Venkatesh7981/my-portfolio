import React from "react";
import { Link } from "react-router-dom";
import TypewriterText from "./Typewriter";

function Home() {
  let textarray = ["Web Developer", "Programmer", "DevOps Enthusiast"];
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <div
        className="d-flex p-lg-5 p-2 parentdiv justify-content-even flex-wrap-reverse "
        style={{ marginTop: "8%", width: "100%" }}
      >
        <div
          className="p-lg-5 p-4 mobileview"
          data-aos="fade-right"
          data-aos-duration="1200"
          style={{ width: "60%", letterSpacing: "1.0px" }}
        >
          <h3>
            Hello,my name is <br />{" "}
            <span className=" fw-bold mt-5 colorclass">Baswa Leela Sarath</span>
          </h3>
          <h2>
            I'm a{" "}
            <span className="colorclass fw-bold mt-5">
              {" "}
              <TypewriterText
                textArray={textarray}
                typingSpeed={100}
                pauseDuration={1000}
              />
            </span>
          </h2>
          <h6
            style={{
              lineHeight: 1.5,

              // fontSize: "clamp(20rem,1vw+10rem,50rem)",
            }}
          >
            Hello! I'm a web developer who turns ideas into interactive
            websites. I code, design, and make digital magic happen. <br />
            Let's explore my portfolio .
          </h6>
          <Link
            to="/about"
            className="btn button colorbg text-white mt-3 mb-3 rounded-5"
          >
            More about me
          </Link>
        </div>

        <div className="p-3 parentdiv imgparent">
          <div className="myimg  text-center">
            <div
              className="p-lg-0 p-4 rounded-2"
              data-aos="flip-right"
              data-aos-duration="1200"
            >
              <img
                src="../images/profile1.png"
                alt="profilepic"
                className="profileimg"
                style={{
                  width: "22vw",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
