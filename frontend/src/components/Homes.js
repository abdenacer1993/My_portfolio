import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* services section start */}
      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="services_taital">
                My <span className="portfolio_taital_1">Services</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="services_section_2">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="box_main ">
                  <div className="app_icon">
                    <img src="images/wordpress.png" />
                  </div>
                  <div className="app_icon_1">
                    <img src="images/wordpress.png" />
                  </div>
                  <h4 className="services_text ">Wordpress</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box_main ">
                  <div className="app_icon">
                    <img src="images/php.png" />
                  </div>
                  <div className="app_icon_1">
                    <img src="images/php.png" />
                  </div>
                  <h4 className="services_text">PHP natif</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box_main ">
                  <div className="app_icon">
                    <img src="images/angular.png" />
                  </div>
                  <div className="app_icon_1">
                    <img src="images/angular.png" />
                  </div>
                  <h4 className="services_text">Angular JS</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box_main ">
                  <div className="app_icon">
                    <img src="images/react.png" />
                  </div>
                  <div className="app_icon_1">
                    <img src="images/react.png" />
                  </div>
                  <h4 className="services_text">React JS</h4>
                </div>
              </div>
            </div>
            <div className="readmore_bt">
              <Link to="/portfolio">My Portfolio</Link>
            </div>
          </div>
        </div>
      </div>
      {/* services section end */}
      {/* portfolio section start */}
      <div className="portfolio_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="portfolio_taital">
                My <span className="portfolio_taital_1">Latest Projects</span>
              </h1>
            </div>
          </div>
          <div className="portfolio_section">
            <div className="portfolio_section_2">
              <div className="row">
                <div className="col-md-8">
                  <div className="container_main">
                    <img src="images/img-1.png" alt className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="images/img-2.png" alt className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio_section_2">
              <div className="row">
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="images/img-3.png" alt className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="container_main">
                    <img src="images/img-4.png" alt className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-md-8">
                  <div className="container_main">
                    <img src="images/img-5.png" alt className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-8">
                  <div className="container_main">
                    <img src="images/img-1.png" alt className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="seemore_bt">
            <a href="#">See More</a>
          </div>
        </div>
      </div>
      {/* portfolio section end */}
      
    
      {/* project box section start */}
      <div className="project_box">
        <div className="container">
          <div className="project_main">
            <h1 className="hire_text">Hire me for your projects</h1>
            <div className="callnow_bt">
            
              <Link to="/contact">Call Now</Link>
              
            </div>
          </div>
        </div>
      </div>
      {/* project box section end */}
    </div>
  );
}

export default Home;
