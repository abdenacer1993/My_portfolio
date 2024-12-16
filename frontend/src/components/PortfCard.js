import React from "react";
import { Link } from "react-router-dom";

function PortfCard({ project }) {
  
  return (
    <div className="col-md-4">
      <div className="container_main">
        {/* Render the first image only */}
        {project.images && project.images.length > 0 && (
          <img
            src={`http://localhost:5000${project.images[0]}`} // First image in the array
            alt="project-screenshot-0"
            className="image"
          />
        )}
        {/* Overlay with project details */}
        <div className="overlay">
          <div className="text">
            <div className="btn_main">
              <h3 className="banner_text" style={{ fontWeight: 'bolder'}}>
                {project.name_site}
              </h3>
              <div className="buy_bt">
                <Link
                  to={`/portfolioDetails/${project.id}`}
                  className="see-more-link"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfCard;
