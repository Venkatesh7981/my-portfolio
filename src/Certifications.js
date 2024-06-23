import React from "react";
import certificates from "./details/Certificate";
import Certificate from "./components/Certificate";
const Certifications = () => {
  return (
    <div>
          <h3 className="fw-bold m-4 text-center">Certifications</h3>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {certificates.map((certificate) => {
          return (
            <Certificate
              img={certificate.img}
              title={certificate.title}
              description={certificate.description}
              link={certificate.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
