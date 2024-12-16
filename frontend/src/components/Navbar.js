import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/portfolio", label: "Portfolio" },
    // { path: "/service", label: "Service" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div>
      {/* Header section */}
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {navItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    <Link className="nav-link" to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Banner section */}
        {location.pathname === "/" && (
  <div className="banner_section layout_padding">
    <section className="slide-wrapper">
      <div className="container-fluid">
        <div
          id="myCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {[...Array(4)].map((_, index) => (
              <li
                key={index}
                data-target="#myCarousel"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              />
            ))}
          </ol>
          <div className="carousel-inner">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="banner_taital_main">
                        <h3 className="banner_text">
                          Hello, I am <br />
                          Hasnaoui Abdenacer
                        </h3>
                        <h1 className="banner_taital">Web Developer</h1>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="social_icon">
                        <ul>
                          {[
                            {
                              icon: "fa-facebook",
                              link: "https://www.facebook.com/hasnaoui1993/",
                            },
                            {
                              icon: "fa-instagram",
                              link: "https://www.instagram.com/abdenacer_hasnaoui/",
                            },
                            {
                              icon: "fa-github",
                              link: "https://github.com/abdenacer1993",
                            },
                            {
                              icon: "fa-linkedin",
                              link: "https://www.linkedin.com/in/abdenacer-hasnaoui-91bb86211/",
                            },
                            {
                              icon: "fa-whatsapp",
                              link: `https://wa.me/21624587616?text=${encodeURIComponent(
                                "Hello Abdenacer, I am looking for a freelancer to develop a web application."
                              )}`,
                            },
                          ].map((social, i) => (
                            <li key={i}>
                              <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i
                                  className={`fa ${social.icon}`}
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="video_bt">
        <div className="play_icon">
          <img src="/images/play-icon.png" alt="Play Icon" />
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Navbar;
