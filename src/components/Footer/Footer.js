import React from "react";
import { Link } from "react-scroll";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <section className="bg-blue-500 py-8 mt-12">
      <h1 className="text-center font-bold text-2xl">Bayajid Alam Joyel</h1>
      <div className="flex items-center justify-center gap-4 py-4 cursor-pointer">
        <Link target="_blank" to="https://github.com/BayajidAlam">
          <BsGithub className="text-3xl" />
        </Link>
        <Link>
          <BsLinkedin className="text-2xl" />
        </Link>
        <Link>
          <BsFacebook className="text-2xl" />
        </Link>
        <Link>
          <IoLogoTwitter className="text-2xl" />
        </Link>
      </div>
      <p className="text-center">© Bayajid Alam Joyel. All rights reserved</p>
    </section>
  );
};

export default Footer;
