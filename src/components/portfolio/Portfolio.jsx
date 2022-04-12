import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/KRYPTO.png";
import IMG2 from "../../assets/CLOTHING.png";
import IMG3 from "../../assets/PHOTO.png";
import IMG4 from "../../assets/DEVBOOK.png";
import IMG5 from "../../assets/IMG5.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Crypto Currency Tracker",
      github: "https://github.com/jakob-sandberg/CryptoMania/",
      demo: "https://crypto-manic.netlify.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: " Clothing E-Commerce",
      github: "https://github.com/jakob-sandberg/jax-clothing",
      demo: "https://jax-clothing.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Photo Review App",
      github: "https://github.com/jakob-sandberg/Foto-Review-app",
      demo: "https://foto-review.netlify.app",
    },
    {
      id: 4,
      image: IMG4,
      title: "Community For Developers",
      github: "https://github.com/jakob-sandberg/Devbook",
      demo: "https://enigmatic-headland-43191.herokuapp.com/",
    },
    {
      id: 5,
      image: IMG5,
      title: "My Own IMDB",
      github: "https://bokaj-movie-hub.netlify.app/",
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
                <a href={github} className="btn" target="_blank">
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
