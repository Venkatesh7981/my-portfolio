import React from "react";
import { useState, useEffect } from "react";
import Carditem from "./Carditem";
import { useLocation } from "react-router-dom";
function Projects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [toggleall, settoggleall] = useState(true);
  const [togglefront, settogglefront] = useState(false);
  const [toggleback, settoggleback] = useState(false);

  const renderprojects = () => {
    if (toggleall) {
      return (
        <div
          className="d-flex flex-wrap justify-content-center align-items-center p-2 m-2"
          style={{ width: "100%" }}
        >
          <Carditem
            url="images/gpstracker.png"
            name="4G Gps Tracker"
            tech="Boostrap ,js,php ,mysql"
            link="https://wisenet.in/gps"
          />
          <Carditem
            url="images/keeper.png"
            name="Keeper app"
            tech="React Js"
            link="https://b-l-sarath.github.io/keeper/"
          />

          <Carditem
            url="images/todolist.png"
            name="Todo list"
            tech="HTML, CSS, Javascript"
            link="https://b-l-sarath.github.io/todolist/"
          />
          <Carditem
            url="images/pleasantvibe.png"
            name="Music player"
            tech="HTML ,CSS, Javascript"
            link="https://b-l-sarath.github.io/pleasantvibe/"
          />
          <Carditem
            url="images/todolistreact.png"
            name="Todo list"
            tech="Reactjs"
            link="https://b-l-sarath.github.io/todolist-react/"
          />
          <Carditem
            url="images/contact.png"
            name="Contact Management"
            tech="reactjs"
            link="https://contactapp-steel.vercel.app/"
          />
          <Carditem
            url="images/spotify.png"
            name="music player"
            tech="Reactjs ,React routing"
            link="https://musicplayer-sable.vercel.app/"
          />
          <Carditem
            url="images/drumstick.png"
            name="Drum player"
            tech="HTML, CSS,Javascript"
            link="https://b-l-sarath.github.io/drumkit/"
          />
          <Carditem
            url="images/weather.png"
            name="Weather predictor"
            tech="HTML, CSS,Javascript"
            link="https://b-l-sarath.github.io/weatherapp/"
          />
          <Carditem
            url="images/diceroller.png"
            name="Dice roller"
            tech="HTML, CSS,Javascript"
            link="https://b-l-sarath.github.io/diceroller/"
          />
          <Carditem
            url="images/dog.png"
            name="Dog World"
            tech="HTML,Bootstrap"
            link="https://b-l-sarath.github.io/getthedog/"
          />
          <Carditem
            url="images/ecommerce.png"
            name="Flipkart clone"
            tech="HTML ,Css"
            link="https://b-l-sarath.github.io/my-ecommerce-website/"
          />
        </div>
      );
    } else if (togglefront) {
      return (
        <div
          className="d-flex flex-wrap p-2 m-2  justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <Carditem
            url="images/keeper.png"
            name="Keeper app"
            tech="React Js"
            link="https://b-l-sarath.github.io/keeper/"
          />

          <Carditem
            url="images/todolist.png"
            name="Todo list"
            tech="HTML, CSS, Javascript"
            link="https://b-l-sarath.github.io/todolist/"
          />
          <Carditem
            url="images/pleasantvibe.png"
            name="Music player"
            tech="HTML ,CSS, Javascript"
            link="https://b-l-sarath.github.io/pleasantvibe/"
          />
          <Carditem
            url="images/todolistreact.png"
            name="Todo list"
            tech="Reactjs"
            link="https://b-l-sarath.github.io/todolist-react/"
          />
          <Carditem
            url="images/contact.png"
            name="Contact Management"
            tech="reactjs"
            link="https://contactapp-steel.vercel.app/"
          />
          <Carditem
            url="images/spotify.png"
            name="music player"
            tech="Reactjs ,React routing"
            link="https://musicplayer-sable.vercel.app/"
          />
          <Carditem
            url="images/drumstick.png"
            name="Drum player"
            tech="HTML, CSS,Javascript"
            link="https://b-l-sarath.github.io/drumkit/"
          />
          <Carditem
            url="images/weather.png"
            name="Weather predictor"
            tech="HTML, CSS,Javascript"
            link="https://b-l-sarath.github.io/weatherapp/"
          />
          <Carditem
            url="images/diceroller.png"
            name="Dice roller"
            tech="HTML, CSS,Javascript"
            link="https://b-l-sarath.github.io/diceroller/"
          />
          <Carditem
            url="images/dog.png"
            name="Dog World"
            tech="HTML,Bootstrap"
            link="https://b-l-sarath.github.io/getthedog/"
          />
          <Carditem
            url="images/ecommerce.png"
            name="Flipkart clone"
            tech="HTML,Css"
            link="https://b-l-sarath.github.io/my-ecommerce-website/"
          />
        </div>
      );
    } else if (toggleback) {
      return (
        <div
          className="d-flex flex-wrap p-2 m-2  justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <Carditem
            url="images/gpstracker.png"
            name="4G Gps Tracker"
            tech="Boostrap ,js,php ,mysql"
            link="https://wisenet.in/gps"
          />
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
        <h2 className="text-white mb-4 fw-bold">My Projects</h2>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "25%" }}
      >
        <button
          className="btn btn-dark m-2 selection "
          style={{
            backgroundColor: toggleall ? " #F31559" : "rgb(52, 46, 46)",
          }}
          onClick={() => {
            settoggleall(true);
            settogglefront(false);
            settoggleback(false);
          }}
        >
          All
        </button>
        <button
          className="btn btn-dark m-2 selection"
          style={{
            backgroundColor: togglefront ? " #F31559" : "rgb(52, 46, 46)",
          }}
          onClick={() => {
            settogglefront(true);
            settoggleall(false);
            settoggleback(false);
          }}
        >
          Frontend
        </button>
        <button
          className="btn btn-dark m-2 selection"
          style={{
            backgroundColor: toggleback ? " #F31559" : "rgb(52, 46, 46)",
          }}
          onClick={() => {
            settoggleback(true);
            settoggleall(false);
            settogglefront(false);
          }}
        >
          Fullstack
        </button>
      </div>
      {/* projects content div */}

      {renderprojects()}
    </div>
  );
}

export default Projects;
