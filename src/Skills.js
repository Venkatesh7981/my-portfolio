import React, { useState } from "react";
import Skilltype from "./Skilltype";

import Skilltag from "./Skilltag";

function Skills() {
  const [type, settype] = useState("Frontend skills");
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
    if (type === "Tools") {
      return (
        <div className="m-lg-5 m-0 d-flex gap-4 flex-wrap">
          <Skilltag name="Postman" icon="devicon-postman-plain colored" />
          <Skilltag name="Git" icon="devicon-git-plain colored" />
          <Skilltag name="Github" icon="devicon-github-original colored" />
          <Skilltag name="VS code" icon="devicon-visualstudio-plain colored" />
          <Skilltag name="vercel" icon="devicon-vercel-original" />
          <Skilltag name="npm" icon="devicon-npm-original-wordmark colored" />
          <Skilltag name="Vagrant" icon="devicon-vagrant-plain colored" />
        </div>
      );
    } else if (type === "Frontend skills") {
      return (
        <div className="m-lg-5 m-0 d-flex gap-4 flex-wrap ">
          <Skilltag name="HTML" icon="devicon-html5-plain colored" />
          <Skilltag name="CSS" icon="devicon-css3-plain colored" />
          <Skilltag name="Tailwind" icon="devicon-tailwindcss-plain colored" />
          <Skilltag name="Bootstrap" icon="devicon-bootstrap-plain colored" />
          <Skilltag name="Javascript" icon="devicon-javascript-plain colored" />

          <Skilltag name="React" icon="devicon-react-original colored" />
          <Skilltag name="Next js" icon="devicon-nextjs-plain " />
          <Skilltag
            name="Redux Toolkit"
            icon="devicon-redux-original colored"
          />
        </div>
      );
    } else if (type === "Backend skills") {
      return (
        <div className="m-lg-5 m-0 d-flex gap-4 flex-wrap">
          <Skilltag name="Node js" icon="devicon-nodejs-plain colored" />
          <Skilltag name="Express js" icon="devicon-express-original colored" />
          <Skilltag name="Next js" icon="devicon-nextjs-plain " />

          <Skilltag name="PHP" icon="devicon-php-plain colored" />
          <Skilltag name="SocketIO" icon="devicon-socketio-original" />
          <Skilltag name="MongoDB" icon="devicon-mongodb-plain colored" />
          <Skilltag name="MYSQL" icon="devicon-mysql-plain colored" />
        </div>
      );
    } else if (type === "programming") {
      return (
        <div className="m-lg-5 m-0 d-flex gap-4 flex-wrap">
          <Skilltag name="C++" icon="devicon-cplusplus-plain colored" />
          <Skilltag name="Python" icon="devicon-python-plain colored" />
          <Skilltag name="Java" icon="devicon-java-plain colored" />
          <Skilltag name="C" icon="devicon-c-plain colored" />
          <Skilltag name="DSA" icon="devicon-thealgorithms-plain colored" />
        </div>
      );
    }
  };
  return (
    <div>
      <h3
        className="text-center fw-bold"
        style={{ marginTop: "4%", height: "100%" }}
      >
        My Skills
      </h3>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ width: "100%", height: "100%", padding: 0 }}
      >
        {/* skill container */}
        <div
          className="d-flex flex-row flex-wrap  "
          style={{ width: "90%", maxHeight: "420px", minHeight: "420px" }}
        >
          {/* skills types */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            style={{ width: "40%" }}
            className=" d-flex justify-content-center align-items-center flex-column skillcontainer mobileview "
          >
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
              icon1="fa-solid fa-laptop-code"
            />
            <Skilltype
              func={onclickfunc}
              type="Tools"
              current={type}
              icon1="fa-solid fa-toolbox"
            />
          </div>
          {/* progress bars */}

          <div
            style={{ width: "60%" }}
            className="p-lg-2  p-0 mobileview mobileskillmargin"
            data-aos="zoom-in"
            data-aos-duration={1000}
          >
            {renderprogressbar()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
