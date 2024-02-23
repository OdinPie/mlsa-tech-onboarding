/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "News Website",
    description:
      "A dynamic news website where users can read news and post news and they are published uftaer admin approval",
    url: "https://agun-news.web.app",
  },
  {
    title: "PDF Editing Website",
    description:
      "A dynamic pdf editing websiteI contributed in with my team",
    url: "https://curious-dragon-bfb4a4.netlify.app/",
  },
  {
    title: "My Resume Site",
    description:
      "This resume is built on the concept of reneissance paintings",
    url: "https://resilient-shortbread-0f0a52.netlify.app/",
  },
  {
    title: "Book Exchange Website",
    description:
      "A goto website for the bibliophiles to exchange old books , post their books and sell and buy them",
    url: " https://book-exchange-website-7550b.web.app/",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
