import React, { useState } from "react";
import Skilltype from "./Skilltype";
import Progress from "./Progress";

function Skills() {
  const [type, settype] = useState("Professional skills");
  const [animate, setanimate] = useState("pcontent");
  const restartanimation = () => {
    setanimate("");
    setTimeout(() => setanimate("pcontent"), 10);
  };
  const onclickfunc = (type) => {
    settype(type);
    restartanimation();
  };

  const renderprogressbar = () => {
    if (type === "Professional skills") {
      return (
        <div className="m-lg-5 m-0">
          <Progress language="communication" percent="70%" animate={animate} />
          <Progress language="Teamlead" percent="90%" animate={animate} />
          <Progress language="Hardworking" percent="90%" animate={animate} />
          <Progress
            language="Time management"
            percent="90%"
            animate={animate}
          />
        </div>
      );
    } else if (type === "Frontend skills") {
      return (
        <div className="m-lg-5 m-0">
          <Progress language="Html" percent="60%" animate={animate} />
          <Progress language="Css" percent="60%" animate={animate} />
          <Progress language="Bootstrap" percent="60%" animate={animate} />
          <Progress language="Javascript" percent="65%" animate={animate} />
          <Progress language="React" percent="70%" animate={animate} />
        </div>
      );
    } else if (type === "Backend skills") {
      return (
        <div className="m-lg-5 m-0">
          <Progress language="Node js" percent="50%" animate={animate} />
          <Progress language="Express js" percent="60%" animate={animate} />
          <Progress language="PHP" percent="45%" animate={animate} />
          <Progress language="MongoDB" percent="50%" animate={animate} />
          <Progress language="MYSQL" percent="70%" animate={animate} />
        </div>
      );
    } else if (type === "programming") {
      return (
        <div className="m-lg-5 m-0">
          <Progress language="Python" percent="70%" animate={animate} />
          <Progress language="C++" percent="60%" animate={animate} />
          <Progress language="c" percent="60%" animate={animate} />
          <Progress language="Java" percent="55%" animate={animate} />
          <Progress language="DSA" percent="50%" animate={animate} />
        </div>
      );
    }
  };
  return (
    <div>
      <h3
        className="text-center m-5 fw-bold"
        style={{ marginTop: "8%", height: "100%" }}
      >
        My Skills
      </h3>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100%" }}
      >
        {/* skill container */}
        <div
          className="d-flex flex-row flex-wrap p-3 "
          style={{ width: "80%", maxHeight: "400px", minHeight: "400px" }}
        >
          {/* skills types */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            style={{ width: "40%" }}
            className=" d-flex justify-content-center align-items-center flex-column skillcontainer mobileview"
          >
            <Skilltype
              func={onclickfunc}
              type="Professional skills"
              current={type}
              icon1="fa-solid fa-user-tie"
            />
            <Skilltype
              func={onclickfunc}
              type="Frontend skills"
              current={type}
              icon1="fa-solid fa-code"
            />
            <Skilltype
              func={onclickfunc}
              type="Backend skills"
              current={type}
              icon1="fa-solid fa-hat-cowboy"
            />
            <Skilltype
              func={onclickfunc}
              type="programming"
              current={type}
              icon1="fa-solid fa-code"
            />
          </div>
          {/* progress bars */}

          <div
            style={{ width: "60%" }}
            className="p-lg-4 p-0 mt-lg-0 mt-4 mobileview"
          >
            {renderprogressbar()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
