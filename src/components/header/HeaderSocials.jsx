import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin">
        <BsLinkedin />
      </a>
      <a href="http://github">
        <BsGithub />
      </a>
      <a href="http://facebook">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
