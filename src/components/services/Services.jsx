import React from "react";
import { BsCheck } from "react-icons/bs";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
          </ul>
        </article>

        {/*   END OF UX/UI */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
          </ul>
        </article>

        {/*  END OF WEB */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icpn" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                neque!
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
