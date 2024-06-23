import React from "react";
import { useState, useEffect } from "react";
import Carditem from "./Carditem";
import { useLocation } from "react-router-dom";
import cardData from "./details/CardData";
function Projects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [toggleall, settoggleall] = useState(true);
  const [togglefront, settogglefront] = useState(false);
  const [toggleback, settoggleback] = useState(false);
  const [toggleapp, settoggleapp] = useState(false);
  const frontendcards = cardData.filter((item) => item.type === "frontend");
  const fullstackcards = cardData.filter((item) => item.type === "fullstack");
  const appdevcards = cardData.filter((item) => item.type === "appdev");

  const renderprojects = () => {
    if (toggleall) {
      return (
        <div
          className="d-flex flex-wrap justify-content-center align-items-center p-2 m-2"
          style={{ width: "100%" }}
        >
          {cardData.map((item, index) => {
            {/* console.log("i mp", index); */}
            return (
              <Carditem
                key={index}
                id={item.id}
                url={item.url}
                name={item.name}
                tech={item.tech}
                link={item.link}
                description={item.description}
              />
            );
          })}
        </div>
      );
    } else if (togglefront) {
      return (
        <div
          className="d-flex flex-wrap p-2 m-2  justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          {frontendcards.map((item, index) => {
            return (
              <Carditem
                key={index}
                url={item.url}
                id={item.id}
                name={item.name}
                tech={item.tech}
                link={item.link}
                description={item.description}
              />
            );
          })}
        </div>
      );
    } else if (toggleback) {
      return (
        <div
          className="d-flex flex-wrap p-2 m-2  justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          {fullstackcards.map((item, index) => {
            return (
              <Carditem
                key={index}
                url={item.url}
                name={item.name}
                id={item.id}
                tech={item.tech}
                link={item.link}
                description={item.description}
              />
            );
          })}
        </div>
      );
    } else if (toggleapp) {
      return (
        <div
          className="d-flex flex-wrap p-2 m-2  justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          {appdevcards.length>0 ? appdevcards.map((item, index) => {
            return (
              <Carditem
                key={index}
                url={item.url}
                name={item.name}
                id={item.id}
                tech={item.tech}
                link={item.link}
                description={item.description}
              />
            );
          }) :<h1>Adding soon...</h1>}
        </div>
      );
    }
  };
  return (
    <div
      className="d-flex flex-column p-4 justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      {/* selection div */}
      <div>
        <h2 className="mb-4 fw-bold">My Projects</h2>
      </div>
      <div
        className="d-flex justify-content-center align-items-center flex-wrap gap-3"
        style={{ width: "80%" }}
      >
        <button
          className="btn btn-dark selection "
          style={{
            backgroundColor: toggleall ? " #F31559" : "rgb(52, 46, 46)",
          }}
          onClick={() => {
            settoggleall(true);
            settogglefront(false);
            settoggleback(false);
            settoggleapp(false);
          }}
        >
          All
        </button>
        <button
          className="btn btn-dark selection"
          style={{
            backgroundColor: togglefront ? " #F31559" : "rgb(52, 46, 46)",
          }}
          onClick={() => {
            settogglefront(true);
            settoggleall(false);
            settoggleback(false);
            settoggleapp(false);
          }}
        >
          Frontend
        </button>
        <button
          className="btn btn-dark  selection"
          style={{
            backgroundColor: toggleback ? " #F31559" : "rgb(52, 46, 46)",
          }}
          onClick={() => {
            settoggleback(true);
            settoggleall(false);
            settogglefront(false);
            settoggleapp(false);
          }}
        >
          Fullstack
        </button>

        <button
          className="btn btn-dark  selection"
          style={{
            backgroundColor: toggleapp ? " #F31559" : "rgb(52, 46, 46)",
          }}
          onClick={() => {
            settoggleback(false);
            settoggleall(false);
            settogglefront(false);
            settoggleapp(true);
          }}
        >
          App Dev
        </button>
      </div>
      {/* projects content div */}

      {renderprojects()}
    </div>
  );
}

export default Projects;
