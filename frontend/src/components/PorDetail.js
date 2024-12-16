import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./PorDetail.css";

function PorDetail() {
  const { id } = useParams(); // Get the 'id' from the URL
  const [product, setProduct] = useState(null); // Initially set to null
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch product details based on 'id'
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/works/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false); // Set loading to false once data is loaded
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Failed to load product data.");
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Show loading message
  }

  if (error) {
    return <p>{error}</p>; // Show error message if there's an issue fetching data
  }

  if (!product) {
    return <p>No product found</p>; // In case no product is found
  }

  return (
    <div>
      <div className="contact_section layout_padding">
        <h1 className="titlesites">{product.name_site}</h1>
        <div className="product-info">
          <div className="product-carousel">
            <Carousel>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={`http://localhost:5000${image}`}
                    alt={`Product image ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="product-description">
            <div className="product-price">
              <h2>
                <strong>Technologie: </strong>
                {product.technologie}
              </h2>
              {product.url_site && (
                <div className="btnliensite">
                  <div className="callnow_bt">
                    <a
                      href={product.url_site}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-discover="true"
                    >
                      View web site
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PorDetail;
