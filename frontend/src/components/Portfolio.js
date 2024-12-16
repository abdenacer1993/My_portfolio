import React, { useState, useEffect } from "react";
import PortfCard from "./PortfCard";
import axios from "axios";

function Portfolio() {
  const [projects, setProjects] = useState([]); // State to store fetched projects

  // Fetch projects data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/works") // Backend API URL
      .then((response) => {
        setProjects(response.data); // Store fetched data in state
        console.log("Projects data fetched:", response.data); // Debugging
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div>
      {/* Portfolio section */}
      <div className="portfolio_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="portfolio_taital">
                My <span className="portfolio_taital_1">Portfolio</span>
              </h1>
              <p className="blog_text">
                I have worked on several projects, such as:
              </p>
            </div>
          </div>
          <div className="portfolio_section_2">
            <div className="row">
              {/* Dynamically render project cards */}
              {projects.length > 0 ? (
                projects.map((project) => (
                  <PortfCard key={project.id} project={project} />
                ))
              ) : (
                <p>Loading projects...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
