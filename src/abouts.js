import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
                  src="../images/logo.png"
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
              Hi, I'm Kuruva Venkatesh — a B.Tech student passionate about
              Web Development and Artificial Intelligence & Machine Learning (AI & ML).
              I have a solid foundation in full-stack development and love building interactive,
              user-friendly applications. My journey in tech began with a strong curiosity for coding,
              which has grown into a commitment to continuous learning and innovation.
              I'm skilled in programming languages like C, Java, and Python, 
              and I’m constantly exploring new tools, frameworks,
              and technologies to stay updated in this fast-evolving field. 
              My focus is on developing modern web applications and applying AI/ML concepts to solve real-world problems.
              I'm always on the lookout for opportunities to learn, collaborate,
               and apply my skills to meaningful projects.
            </h6>
            <a
              href="../resume.pdf"
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
        className="d-flex justify-content-around flex-wrap mb-5"
        style={{ width: "90%" }}
      >
        {/* educatonal details div */}
        <div data-aos="fade-right" data-aos-duration="1500">
          <h4 className="" style={{ paddingLeft: "7%" }}>
            Education
          </h4>
          <div className="d-flex flex-column m-2">
            <div
              className="m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%", maxHeight: "20%" }}
            >
              <h6 className=" ">GMRIT (Rajam,Andhrapradesh)</h6>
              <p className=" m-0">computer science engineering</p>
              <p className="colorclass fw-bold m-0"> 2021-2025</p>
              <p className="colorclass fw-bold m-0"> CGPA:9.2</p>
            </div>
            <div
              className="  m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%" }}
            >
              <h6>
                Narayana Junior College <br />
                (Srikakulam,Andhrapradesh)
              </h6>
              <p className=" m-0">MPC</p>
              <p className="colorclass fw-bold m-0"> 2019-2020</p>
              <p className="colorclass fw-bold m-0"> Percentage:95%</p>
            </div>
            <div
              className=" m-3 boxitem"
              style={{ paddingLeft: "7%", width: "100%" }}
            >
              <h6>
                Amruth Sai Vidya Mandir <br /> (Srikakulam,Andhrapradesh)
              </h6>
              <p className=" m-0">SSC</p>
              <p className="colorclass fw-bold m-0"> 2018</p>
              <p className="colorclass fw-bold m-0"> Grade:10.00</p>
            </div>
          </div>
        </div>

        {/* experince div */}

        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="mt-lg-0 mt-5"
        >
          <h4 style={{ paddingLeft: "7%" }}>Experience</h4>
          <div className="d-flex flex-column">
            <div
              className=" m-2 boxitem"
              style={{ paddingLeft: "7%", width: "100%", minHeight: "20%" }}
            >
              <h6>Wisenet automation pvt ltd</h6>
              <p>As a full stack developer </p>
              <p className="colorclass fw-bold m-0"> 2023</p>
            </div>
            <div
              className="  m-2 boxitem"
              style={{ paddingLeft: "7%", width: "100%" }}
            >
              <h6>Codechef Student chapter</h6>
              <p>Tech Lead</p>
              <p className="colorclass fw-bold m-0"> 2022-2025</p>
            </div>
            <div
              className="  m-2 boxitem"
              style={{ paddingLeft: "7%", width: "100%" }}
            >
              <h6>GMRIT </h6>
              <p>Class Representative</p>
              <p className="colorclass fw-bold m-0"> 2021-2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
