import React, { useState } from "react";
import certificates from "./details/Certificate";
import Certificate from "./components/Certificate";

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="text-center">
      <h3 className="fw-bold m-4">Certifications</h3>

      <div className="d-flex justify-content-center align-items-center">
        {/* Left Arrow */}
        <button
          className="btn btn-outline-danger mx-2 fs-3"
          onClick={handlePrev}
        >
          &#60;
        </button>

        {/* Certificate Card */}
        <Certificate
          key={certificates[currentIndex].id}
          img={certificates[currentIndex].img}
          title={certificates[currentIndex].title}
          description={`Issued by ${certificates[currentIndex].issuer}`}
        />

        {/* Right Arrow */}
        <button
          className="btn btn-outline-danger mx-2 fs-3"
          onClick={handleNext}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Certifications;
