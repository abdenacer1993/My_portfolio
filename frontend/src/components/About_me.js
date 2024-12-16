import React from "react";
import "./style.css";

function About_me() {
  return (
    <div>
      {/* blog section start */}
      <div
        className="mail_section_1 layout_padding"
        style={{ paddingTop: "170px" }}
      >
        {/* fisrt section */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="blog_taital">
                About <span className="contact_taital_1">Me</span>
              </h1>

              <p className="blog_text">
                My name is Abdenacer Hasnaoui, a passionate web developer. With
                expertise in Full Stack development, I specialize in building
                modern, dynamic, and responsive websites tailored to meet user
                needs.
              </p>
            </div>
          </div>
        </div>
        {/* second section skills */}
        <div className="container">
          <div className="services_section_2 skills ">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="services_taital">
                  My <span className="portfolio_taital_1">Skills</span>
                </h1>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="row skills-content skills-animation">
                  <div className="col-lg-6">
                    <div className="progress">
                      <span className="skill">
                        <span>HTML</span> <i className="val">100%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}
                    <div className="progress">
                      <span className="skill">
                        <span>CSS</span> <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}
                    <div className="progress">
                      <span className="skill">
                        <span>JavaScript</span> <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}
                    <div className="progress">
                      <span className="skill">
                        <span>ANGULAR</span> <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>

                    {/* End Skills Item */}

                    <div className="progress">
                      <span className="skill">
                        <span>express</span> <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}
                  </div>
                  <div className="col-lg-6">
                    <div className="progress">
                      <span className="skill">
                        <span>PHP native</span> <i className="val">80%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}
                    <div className="progress">
                      <span className="skill">
                        <span>WordPress/CMS</span> <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}

                    <div className="progress">
                      <span className="skill">
                        <span>React</span> <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}
                    <div className="progress">
                      <span className="skill">
                        <span>Node</span> <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}
                    <div className="progress">
                      <span className="skill">
                        <span>Photoshop</span> <i className="val">50%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "50%" }}
                        />
                      </div>
                    </div>
                    {/* End Skills Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third section education */}
        <div className="container resume">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>ABdenacer hasnaoui</h4>
                <p>
                  <em>
                    Web developer with strong problem-solving skills and a
                    proven experience in designing and creating web
                    applications.
                  </em>
                </p>
                <ul>
                  <li>Gafsa, Tunisia, Tn</li>
                  <li>
                    <a href="mailto:abdenacer1993@gmail.com">
                      abdenacer1993@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/abdenacer1993"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abdenacer-hasnaoui-91bb86211/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>LICENSE APPLIED DEGREE IN COMPUTER TECHNOLOGY</h4>
                <h5>2019</h5>
                <p>
                  <em>Higher Institute of Technological Studies of Tunisia</em>
                </p>
              </div>
              <h3 className="resume-title">Other training</h3>
              <div className="resume-item">
                <h4>Full Stack Developer (MERN Stack)</h4>
                <h5>2022</h5>
                <p>
                  <em>GOMYCODE</em>
                </p>
                <ul>
                  <li>
                    Built and deployed scalable web applications using
                    MongoAtlas, Express.js, React, and Node.js.
                  </li>
                  <li>
                    Developed responsive front-end interfaces with React and
                    styled-components.
                  </li>
                  <li style={{marginBottom: '11px;'}}>
                    Implemented RESTful APIs and middleware using Express.js and
                    Node.js.
                  </li>
                  
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Freelance Web Developer</h4>

                <h5>2023 - Present</h5>
                <p style={{ width: "100%" }}>
                  <em>
                    I develop custom websites that are visually engaging,
                    user-friendly, and optimized for performance.
                  </em>
                </p>
                <ul>
                  <li>
                    <strong>Front-End :</strong>HTML/CSS/JS, React, Angular
                  </li>
                  <li>
                    <strong>Back-End :</strong>PHP, NodeJS, ExpressJS
                  </li>
                  <li>
                    <strong>CMS & E-Commerce :</strong>Wordpress
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Web Developer at Sandlist</h4>
                <p style={{ width: "100%" }}>
                  <em>
                    Design and implementation of a web application to consult
                    and publish announcements for our company{" "}
                  </em>
                </p>
                <h5>2023 - 2024</h5>
                <p>
                  <em>Tunis, Tunisia</em>
                </p>
                <ul>
                  <li>Creation of interfaces</li>
                  <li>Implementation and management of REST APIs</li>
                </ul>
                <p style={{ marginTop: "10px" }}>
                  <em>
                    <strong>Environment & Tools : </strong>HTML, PHP, CSS,
                    Bootstrap, JavaScript
                  </em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Web integrator</h4>
                <h5>2022 - 2023</h5>
                <p>
                  <em>Tunis, Tunisia</em>
                </p>
                <ul>
                  <li>Creation of responsive websites</li>
                  <li>Creation of interfaces</li>
                  <li>Use of themes according to client needs.</li>
                </ul>
                <p style={{ marginTop: "10px" }}>
                  <em>
                    <strong>Environment & Tools : </strong>WordPress, Divi,
                    Elementor
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* last section */}
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 services_section_2 skills "
              style={{ marginBottom: "50px;" }}
            >
              <h1 className="blog_taital">
                Download <span className="contact_taital_1"> My CV</span>
              </h1>
              <div className="cvbtn">
                <div className="send_bt">
                  <a href="./Cv/abdenacer hasnaoui an_cv.pdf" download>
                    <button type="button">Download CV(En)</button>
                  </a>
                </div>
                <div className="send_bt">
                  <a href="./Cv/Hasnaoui Abdenacer fr_cv.pdf" download>
                    <button type="button">Download CV(Fr)</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_me;
