import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/KRYPTO.png";
import IMG2 from "../../assets/CLOTHING.png";
import IMG3 from "../../assets/PHOTO.png";
import IMG4 from "../../assets/DEVBOOK.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Crypto Currency Tracker",
      github: "https://github.com/",
      demo: "https://crypto-manic.netlify.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: " Clothing E-Commerce",
      github: "https://github.com/",
      demo: "https://jax-clothing.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Photo Review App",
      github: "https://github.com/",
      demo: "https://foto-review.netlify.app",
    },
    {
      id: 4,
      image: IMG4,
      title: "Community For Developers",
      github: "https://github.com/",
      demo: "https://google.com/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
