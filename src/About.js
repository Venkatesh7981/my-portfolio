import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./App.css";

import { useLocation } from "react-router-dom";

function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* about details */}
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <div>
          <h3 className="fw-bold m-4 text-center">About Me</h3>
        </div>
        <div className="d-flex  justify-content-between p-5 m-lg-5 m-0  flex-wrap  ">
          <div className="parentdiv imgparent">
            <div
              className="myimg "
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="p-4">
                <img
                  src="../images/logo.jpg"
                  alt="profilepic"
                  className="profileimg"
                  style={{
                    width: "22vw",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="p-3 d-flex align-items-center mobileview2 flex-column justify-content-center"
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{ maxWidth: "55%" }}
          >
            <h6 style={{ lineHeight: 1.5 }}>
              Hi, I'm Kuruva Venkatesh — a B.Tech student passionate about Web Development and AI & ML.
              I enjoy building interactive, user-friendly applications and exploring new technologies to stay current in the field. 
              I'm skilled in C, Java, and Python, with a strong focus on full-stack development and applying AI/ML to real-world problems.
              I'm always eager to learn, collaborate, and grow through hands-on experience.


            </h6>
            <a
              href="./images/resume.pdf"
              download
              target="_blank"
              className="btn button colorbg text-white  mt-3 rounded-5 "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* educational details */}

      <h3
        className=" text-center qualification fw-bold mb-5 mt-4"
        style={{ width: "90%" }}
      >
        Qualification
      </h3>
      <div
        className="d-flex justify-content-around flex-wrap mb-5 mobilequalificationview"
        style={{ width: "90%" }}
      >
        {/* educatonal details div */}
        <div className="ml-5 p-3 mobilequalificationview">
          <h4 className="" style={{ paddingLeft: "7%" }}>
            Education
          </h4>
          <div className="d-flex flex-column m-2 timeline">
            <div
              className="m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%", maxHeight: "20%" }}
            >
              <span className="timelinepoint"></span>
              <h6 className=" ">RGMCET (Nandyal,Andhrapradesh)</h6>
              <p className=" m-0">computer science engineering(AI&ML)</p>
              <p className="colorclass fw-bold m-0"> 2022-2026</p>
              <p className="colorclass fw-bold m-0"> CGPA:8.0</p>
            </div>
            <div
              className="  m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%" }}
            >
              <span className="timelinepoint"></span>

              <h6>
                Andhra Pradesh Social Welfare Residential Jr College<br />
                (Kurnool,Andhrapradesh)
              </h6>

              <p className=" m-0">MPC</p>
              <p className="colorclass fw-bold m-0"> 2019-2021</p>
              <p className="colorclass fw-bold m-0"> Percentage:90%</p>
            </div>
            <div
              className=" m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%" }}
            >
              <span className="timelinepoint"></span>

              <h6>
               Shanthi Talent EM High School <br /> (Pathikonda,Kurnool,Andhrapradesh)
              </h6>
              <p className=" m-0">SSC</p>
              <p className="colorclass fw-bold m-0"> 2019</p>
              <p className="colorclass fw-bold m-0"> CGPA:9.7</p>
            </div>
          </div>
        </div>

        {/* experince div */}

        <div className="mt-lg-0 mt-5 p-3 ml-5 mobilequalificationview">
          <h4 className="" style={{ paddingLeft: "7%" }}>
            Experience
          </h4>
          <div className="d-flex flex-column timeline">
           
            <div
              className="m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%", minHeight: "20%" }}
            >
              <span className="timelinepoint"></span>

              <h6> Eduskills-AIML Virtual Internship</h6>
              <p>Intern – Artificial Intelligence & Machine Learning</p>
              <p className="colorclass fw-bold m-0">2023-Sep</p>
            </div>
            <div
              className="  m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%" }}
            >
              <span className="timelinepoint"></span>

              <h6>Eduskills</h6>
              <p>Web development</p>
              <p className="colorclass fw-bold m-0"> 2024-Aug</p>
            </div>
             <div
              className="m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%", minHeight: "20%" }}
            >
              <span className="timelinepoint"></span>

              <h6>Runtime Robotics</h6>
              <p>Robotics Intern</p>
              <p className="colorclass fw-bold m-0">2025 - Present</p>

            </div>
            {/* <div
              className="  m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%" }}
            >
              <span className="timelinepoint"></span>

              <h6>GMRIT </h6>
              <p>Class Representative</p>
              <p className="colorclass fw-bold m-0"> 2021-2022</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
