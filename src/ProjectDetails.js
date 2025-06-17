import React, { useState, useEffect } from "react";
import cardData from "./details/CardData";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./App";
const ProjectDetails = () => {
  const { id } = useParams();
  const theme = useContext(ThemeContext);
  const [color, setcolor] = useState("black");
  useEffect(() => {
    theme === "lighttheme" ? setcolor("black") : setcolor("white");
  }, [theme]);

  const project = cardData.find((item) => item.id === parseInt(id));
  //   console.log(project);
  return (
    <div className="p-3 ">
      <h1 className="fw-bold m-4 text-center">
        {project.name} Project details
      </h1>

      <div className="w-100 d-flex flex-wrap">
        <div
          className="d-flex flex-column p-4 mobileview"
          style={{ width: "50%" }}
        >
          <div>
            <p>{project.description.des}</p>
            <hr />
            <p>{project.description.features}</p>
          </div>
          <h3 className="m-3">Technology</h3>
          <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center mobileview">
            {project.tech.map((item, index) => {
              return (
                <span
                  className="p-3 rounded-3 "
                  style={{ width: "140px", boxShadow: "1px 3px 3px #f31559" }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>

        <div
          className="d-flex p-md-5 p-0 flex-column mobileview "
          style={{ width: "50%" }}
        >
          
          {project.link === "" ? (
            <div className="d-flex gap-4  justify-content-center align-items-center  m-2">
              <span
                className="p-3 rounded-3"
                style={{
                  boxShadow: "1px 3px 3px #f31559",
                  textDecoration: "none",
                  color: color,
                }}
              >
                Not Available
              </span>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <Link
                to={project.link}
                className="p-3 rounded-3 "
                style={{
                  boxShadow: "1px 3px 3px #f31559",
                  textDecoration: "none",
                  color: color,
                }}
                target="_blank"
              >
                Visit
              </Link>
            </div>
          )}
          {project.sourcecode1 === "" ? (
            <div className="d-flex gap-4  justify-content-center align-items-center  m-2">
              <span
                className="p-3 rounded-3"
                style={{
                  boxShadow: "1px 3px 3px #f31559",
                  textDecoration: "none",
                  color: color,
                }}
              >
                Not Available
              </span>
            </div>
          ) : project.sourcecode2 === "" ? (
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center m-2">
              <Link
                to={project.sourcecode1}
                className="p-3 rounded-3 "
                style={{
                  boxShadow: "1px 3px 3px #f31559",
                  textDecoration: "none",
                  color: color,
                }}
                target="_blank"
              >
                sourcecode
              </Link>
            </div>
          ) : (
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center m-2">
              <Link
                to={project.sourcecode1}
                className="p-3 rounded-3 "
                style={{
                  boxShadow: "1px 3px 3px #f31559",
                  textDecoration: "none",
                  color: color,
                }}
                target="_blank"
              >
                Source Code1
              </Link>

              <Link
                to={project.sourcecode2}
                className="p-3 rounded-3 "
                style={{
                  boxShadow: "1px 3px 3px #f31559",
                  textDecoration: "none",
                  color: color,
                }}
                target="_blank"
              >
                Source Code2
              </Link>
            </div>
          )}
          {/* <Link
                to="/"
                className="p-3 rounded-3 "
                style={{
                  boxShadow: "1px 3px 3px #f31559",
                  textDecoration: "none",
                  color: color,
                }}
              >
                Source Code */}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
