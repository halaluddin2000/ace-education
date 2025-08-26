import "./Contact.css";

import massage from "../../../assets/mas.png";
import call_icon from "../../../assets/call.png";
import location_icon from "../../../assets/location.png";
import msg_icon from "../../../assets/msg-icon.png";
import arrow from "../../../assets/arrow-1.png";
import { useState } from "react";
import Title from "../../Title/Title";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "32462b91-6e45-4042-bb64-f9d2a4d588e7");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    // const data = await response.json();

    if (res.success) {
      console.log("success", res);
      setResult(res.massage);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <>
      <div className="text-center ">
        <Title subTitle={"Contact Us"} title={"Get in Touch"} />
      </div>
      <div className="contact ">
        <div className="contact-col">
          <h3>
            {" "}
            Send us a message <img src={massage} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={msg_icon} alt="" /> Contact@GreatStack.dev
            </li>
            <li>
              <img src={call_icon} alt="" /> +8801611225501-03
            </li>
            <li>
              {" "}
              <img src={location_icon} alt="" />
              58/10/A (2nd Floor) , Free School Street, <br /> Panthapath, Dhaka
              1205
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter Your name" />
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Your phone number"
              required
            />
            <label>Write your messages here</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your massage"
              required
            />
            <label>Write Your messages here</label>
            <textarea
              name="message"
              cols="20"
              rows="10"
              placeholder="enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit Now <img src={arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
