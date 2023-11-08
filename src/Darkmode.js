import React, { useState } from "react";

import { BsSun } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Darkmode({ updatetheme, theme }) {
  const [isSunIcon, setIsSunIcon] = useState(false);
  const [animate, setanimate] = useState("");
  const restartanimation = () => {
    setanimate("");
    setTimeout(() => setanimate("sunicon"), 10);
  };

  return (
    <div className="darkmode">
      <div
        onClick={() => {
          setIsSunIcon((prev) => !prev);
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
        {/* <i class={`fa-solid fa-sun ${animate} fa-2x text-warning`}></i> */}
        {/* <i class={`fa-solid fa-moon ${animate} moonrotate fa-3x`}></i> */}
      </div>
    </div>
  );
}

export default Darkmode;
