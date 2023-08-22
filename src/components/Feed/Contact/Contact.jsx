import React, { useState } from "react";
import emailjs from "emailjs-com";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import "./Contact.scss";
import Tooltip from "../../Tooltip/Tooltip";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n564uma",
        "template_rhypobp",
        e.target,
        "RC44Kgbz-qiaVXbAf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="Contact">
      <h1>📩Send over an email📩</h1>
      <form className="Contact__form" onSubmit={sendEmail}>
        <div className="Contact__form__name">
          <input
            type="text"
            name="name"
            id="inputName"
            placeholder="Name"
            required
          />
        </div>
        <div className="Contact__form__email">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="Contact__form__subject">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="Contact__form__message">
          <textarea
            type="text"
            cols="30"
            rows="8"
            name="message"
            id="message"
            placeholder="Your message"
            required
          />
        </div>
        <div className="Contact__form__button">
          <button type="submit" value="send message">
            Send Email
          </button>
        </div>
      </form>
      <div className="Contact__socials">
        <a target="_blank" href="https://github.com/An-Be">
          <AiFillGithub />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/andrea-berrocal-/">
          <AiFillLinkedin />
        </a>
        <a target="_blank" href="mailto: andrea.berrocal95@gmail.com">
          <MdEmail />
        </a>
        <Tooltip
          text="download my resume"
          direction="right"
          children={
            <a
              href="/Berrocal-Resume.pdf"
              download
            >
              <BiSolidDownload />
            </a>
          }
        ></Tooltip>
      </div>
    </div>
  );
};

export default Contact;
