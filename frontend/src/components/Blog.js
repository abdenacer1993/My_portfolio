import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Blog() {
  const [blogs, setBlogs] = useState([]); // State to store fetched blog data
  const [visibleBlogs, setVisibleBlogs] = useState(3); // State to track how many blogs to display
  const [showMore, setShowMore] = useState({}); // State to manage "See More" toggling for each blog

  // Function to toggle "See More" for a blog
  const toggleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Function to load more blogs on scroll
  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => {
      const newVisible = Math.min(prevVisibleBlogs + 3, blogs.length); // Ensure we don't exceed the blog list length
      console.log("Loading more blogs. Now showing:", newVisible); // Debugging
      return newVisible;
    });
  };

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      console.log("Scroll Position:", scrollTop + clientHeight, "Scroll Height:", scrollHeight); // Debugging

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        loadMoreBlogs();
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blogs]);

  // Fetch blogs from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs") // Backend API URL
      .then((response) => {
        setBlogs(response.data); // Store fetched data in state
        console.log("Blogs data fetched:", response.data); // Debugging
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
      {/* Blog Section Start */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="blog_taital">
                My <span className="contact_taital_1">Blog</span>
              </h1>
              <p className="blog_text">
                Welcome to my blog! Here, I share my experiences, insights, and
                tips on web development, design, and the technologies that power
                the modern web. Whether you're a fellow developer or someone
                looking to learn more, this blog is designed to help you stay
                updated and inspired.
              </p>
            </div>
          </div>
        </div>
        <div className="blog_section_2">
          <div className="container">
            <div className="row">
              {blogs.slice(0, visibleBlogs).map((blog, index) => (
                <div className="col-md-4 col-sm-12" key={blog.title}>
                  <div className="blog_box">
                    <div className={blog.class}>
                      <h4 className="date_text">Posted on: {blog.date}</h4>
                      <h4 className={blog.h4class}>{blog.title}</h4>
                    </div>
                    <p className="lorem_text">
                      {showMore[index]
                        ? blog.text
                        : `${blog.text.slice(0, 130)}...`}
                    </p>
                    <button
                      onClick={() => toggleShowMore(index)}
                      className="see-more-btn"
                    >
                      {showMore[index] ? "See Less" : "See More"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {visibleBlogs < blogs.length && (
              <p className="load_more_text">Scroll down to load more...</p>
            )}
          </div>
        </div>
      </div>
      {/* Blog Section End */}
    </div>
  );
}

export default Blog;
