import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Darkmode({ updatetheme, theme }) {
  const [animate, setanimate] = useState("");

  const restartanimation = () => {
    setanimate("");
    setTimeout(() => setanimate("sunicon"), 10);
  };

  return (
    <div className="darkmode">
      <div
        onClick={() => {
          restartanimation();
          updatetheme();
        }}
      >
        {theme === "darktheme" ? (
          <div className={`${animate}`}>
            <BsSun style={{ fontSize: "40px" }} />
          </div>
        ) : (
          <div className={`${animate}`}>
            <BsFillMoonStarsFill style={{ fontSize: "40px" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Darkmode;
