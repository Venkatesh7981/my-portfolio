import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Contactinfo from "./Contactinfo";
function Contact() {
  let errormessages = [
    "Name should contain atleast 6 characters",
    "Enter valid email",
    "Enter valid mobile no",
    "Enter something",
  ];
  const [isname, setisname] = useState(false);
  const [isemail, setisemail] = useState(false);
  const [isphone, setisphone] = useState(false);
  const [ismessage, setismessage] = useState(false);
  const [issubmit, setissubmit] = useState(false);
  const [issendmessage, setissendmessage] = useState(false);
  const [data, setdata] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobileRegex = /^[6-9][0-9]{9}$/;
    //validating the input fields
    emailRegex.test(data.Email) ? setisemail(true) : setisemail(false);
    data.Name.trim().length >= 6 ? setisname(true) : setisname(false);
    mobileRegex.test(data.Phone) ? setisphone(true) : setisphone(false);
    data.Message.trim().length > 3 ? setismessage(true) : setismessage(false);

    if (isname && isphone && ismessage) return true;
    else return false;
  };
  const formsubmit = async (e) => {
    e.preventDefault();
    setissubmit(true);
    let result = validate();

    if (result) {
      setissendmessage(true);

      const formData = new FormData();
      formData.append("Name", data.Name);
      formData.append("Email", data.Email);
      formData.append("Phone", data.Phone);
      formData.append("Message", data.Message);
      try {
        const result = await axios.post(
          "https://sheetdb.io/api/v1/cxkzh9jaz8ycs",
          formData
        );
        console.log(result.data);
        setdata({
          Name: "",
          Email: "",
          Phone: "",
          Message: "",
        });
        toast.success("Thanks for the submission", {
          autoClose: 1000,
          theme: "dark",
        });
      } catch (error) {
        console.log("error occured", error.message);
      } finally {
        setissendmessage(false);
      }
    }
  };

  return (
    <div
      className="m-1 p-lg-2 p-5 d-flex flex-column justify-content-center align-items-center maincontainer"
      style={{ minHeight: "90vh", overflowY: "hidden" }}
    >
      <div>
        <h2 className="fw-bold text-center">Contact Me</h2>
      </div>
      <div
        className="d-flex p-3  flex-wrap"
        style={{ width: "100%", height: "100%" }}
      >
        {/* contact info component  */}
        <Contactinfo />

        <div
          className=" p-lg-3 p-0  mt-lg-0 mt-3 mb-3 mobileview contactform"
          style={{ width: "60%" }}
        >
          <h4 className="text-center m-4">Get In Touch</h4>
          <form
            className="
            d-flex
            flex-column
            justify-content-center
            align-items-center
           "
            onSubmit={formsubmit}
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <input
              type="text"
              placeholder="Your name"
              name="Name"
              className="inputbox"
              onChange={handlechange}
              value={data.Name}
            />{" "}
            <p
              class={`errorblock text-danger m-1 fs-10 ${
                !isname && issubmit ? "errormessage" : ""
              }`}
            >
              {errormessages[0]}
            </p>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              className="inputbox"
              onChange={handlechange}
              value={data.Email}
            />{" "}
            <p
              class={`errorblock text-danger m-1 ${
                !isemail && issubmit ? "errormessage" : ""
              }`}
            >
              {errormessages[1]}
            </p>
            <input
              type="text"
              placeholder="Phone"
              name="Phone"
              className="inputbox"
              onChange={handlechange}
              value={data.Phone}
            />{" "}
            <p
              class={`errorblock text-danger m-1 ${
                !isphone && issubmit ? "errormessage" : ""
              }`}
            >
              {errormessages[2]}
            </p>
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="5"
              placeholder="message"
              onChange={handlechange}
              value={data.Message}
            ></textarea>
            <p
              class={`errorblock text-danger m-1 ${
                !ismessage && issubmit ? "errormessage" : ""
              }`}
            >
              {errormessages[3]}
            </p>
            <input
              type="submit"
              className="btn button colorbg text-white  mt-3 rounded-5 "
              value={issendmessage ? "sending message..." : "send message"}
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;