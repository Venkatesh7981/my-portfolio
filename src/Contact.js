import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
function Contact() {
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

  const formsubmit = async (e) => {
    e.preventDefault();
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
    }
  };
  return (
    <div
      className="m-1 p-lg-2 p-5 d-flex flex-column justify-content-center align-items-center maincontainer"
      style={{ minHeight: "90vh", overflowY: "hidden" }}
    >
      <div>
        <h2 className="fw-bold text-center">Contact me</h2>
      </div>
      <div
        className="d-flex p-3  flex-wrap"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="d-flex flex-column  justify-content-center align-items-center mobileview"
          style={{ width: "40%" }}
        >
          <div
            data-aos="flip-right"
            data-aos-duration="500"
            className="contactitem p-3"
          >
            <i className="fa-brands fa-linkedin fa-2x  m-2"></i>
            <h6>Linkedin</h6>

            <Link
              to="https://www.linkedin.com/in/leelasarath-baswa"
              target="_blank"
              style={{ textDecoration: "none", color: "#F31559" }}
            >
              Connect with me
            </Link>
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="500"
            className="contactitem p-3"
          >
            <i className="fa-solid fa-envelope fa-2x  m-2"></i>
            <h6>Email</h6>

            <Link
              to="mailto:leelasarathbaswa@gmail.com"
              style={{ textDecoration: "none", color: "#F31559" }}
            >
              Write me
            </Link>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="500"
            data-aos-delay="1000"
            className="contactitem p-3"
          >
            <i className="fa-brands fa-whatsapp fa-2x  m-2 "></i>
            <h6>Whatsapp</h6>

            <Link
              to="https://wa.me/918074135072"
              target="_blank"
              style={{ textDecoration: "none", color: "#F31559" }}
            >
              Message me
            </Link>
          </div>{" "}
        </div>
        <div
          className=" p-lg-3 p-0  mt-lg-0 mt-3 mb-3 mobileview"
          style={{ width: "60%" }}
        >
          <h4 className="text-center m-4">Get In Touch</h4>
          <form
          className="
            d-flex
            flex-column
            justify-content-center
            align-items-center"
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
            <br />
            <input
              type="text"
              placeholder="Email"
              name="Email"
              className="inputbox"
              onChange={handlechange}
              value={data.Email}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Phone"
              name="Phone"
              className="inputbox"
              onChange={handlechange}
              value={data.Phone}
            />{" "}
            <br />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="5"
              placeholder="message"
              onChange={handlechange}
              value={data.Message}
            ></textarea>
            <input
              type="submit"
              className="btn button colorbg text-white  mt-4 rounded-5 "
              value="send message"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
