import React, { useState } from "react";

function Darkmode({ updatetheme, theme }) {
  return (
    <div className="darkmode">
      <div
        onClick={() => {
          updatetheme();
        }}
      >
        {theme === "darktheme" ? (
          <i class="fa-solid fa-sun fa-2x"></i>
        ) : (
          <i class="fa-solid fa-moon fa-2x"></i>
        )}
      </div>
    </div>
  );
}

export default Darkmode;
