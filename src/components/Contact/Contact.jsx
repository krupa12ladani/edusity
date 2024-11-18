import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "344ad7ff-6202-4ba1-a890-0c5a7972efa3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@GrateStack.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +123-456-799
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts ave, Cambreidge
            <br />
            MA 02139, united states
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <lable>Your Name</lable>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
          />
          <lable>Your Name</lable>
          <input
            type="tel"
            name="phone"
            placeholder="entre your mobile number"
            required
          />
          <lable>Write your msg here</lable>
          <textarea
            name="message   "
            id=""
            rows="6"
            placeholder="enter your massge"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn ">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  );
};

export default Contact;
