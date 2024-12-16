import React, { useState } from "react";
import "./style.css";

function Contact() {
  // Initialize state variables for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // Error state for displaying validation message

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "subject") setSubject(value);
    if (name === "message") setMessage(value);
  };

  const isFormValid = name && email && phone && subject && message;
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (!isFormValid) {
      setError('All fields are required');  // This should trigger error message display
      return;
    }
  
    setError(''); // Clear the error if form is valid
    // Form data object
    const formData = {
      name,
      email,
      phone,
      subject,
      message,
    };

    try {
      const response = await fetch("http://localhost:5000/contact/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        alert("Message sent successfully!");
        // Clear form after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  };

  return (
    <div>
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact_taital">
                My <span className="contact_taital_1">Contact</span>
              </h1>
            </div>
          </div>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-12">
                <div className="contact-info">
                  {/* Icône Email */}
                  <a href="mailto:abdenacer1993@gmail.com" className="contact-item">
                    <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                    abdenacer1993@gmail.com
                  </a>
                  <br />
                  {/* Icône Téléphone */}
                  <a href="tel:+21624587616" className="contact-item">
                    <i className="fa fa-phone" aria-hidden="true"></i> +216 24
                    587 616
                  </a>
                </div>
              </div>

              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="mail_section_1">
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Your Name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      required // This makes the field required
                    />
                    <input
                      type="email"
                      className="mail_text"
                      placeholder="Your Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      required // This makes the field required
                    />
                    <input
                      type="number"
                      className="mail_text"
                      placeholder="Your Phone"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      required // This makes the field required
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Your Subject"
                      name="subject"
                      value={subject}
                      onChange={handleChange}
                      required // This makes the field required
                    />
                    <textarea
                      className="massage-bt"
                      placeholder="Your Message"
                      rows={5}
                      name="message"
                      value={message}
                      onChange={handleChange}
                      required // This makes the field required
                    />

                    {/* Display error message if the form is invalid */}
                    {error && <p className="error-message">{error}</p>}

                    <div className="send_bt">
                      <button type="submit" disabled={!isFormValid}>
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project box section start */}
      <div className="project_box">
        <div className="container">
          <div className="project_main">
            <h1 className="hire_text">Hire me for your projects</h1>
            <div className="callnow_bt">
              <a href="tel:+21624587616">Call Now</a>
            </div>
          </div>
        </div>
      </div>
      {/* Project box section end */}
    </div>
  );
}

export default Contact;
