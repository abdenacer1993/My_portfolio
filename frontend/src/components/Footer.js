import * as React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="footer_section">
        <div className="container">
          <div className="location_text">
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/place/Gafsa/@34.4285913,8.7736605,14z/data=!3m1!4b1!4m6!3m5!1s0x12f896fa5476901f:0x873608732b8975d5!8m2!3d34.4311398!4d8.7756556!16zL20vMDZoMW04!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-map-marker" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="tel:+21624587616">
                  <i className="fa fa-phone" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="mailto:abdenacer1993@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            {currentYear} All Rights Reserved. Developed by{" "}
            <a
              href="https://www.linkedin.com/in/abdenacer-hasnaoui-91bb86211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              A. Hasnaoui
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
