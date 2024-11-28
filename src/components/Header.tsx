import logo from "@/app/favicon.ico";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="col-auto">
      <Image
        alt="logo"
        src={logo}
        className=" m-5 flex
      h-20 w-20 rounded-full items-center justify-center"
      />
      <nav
        className="
        bg-dark-blue
      "
      >
        <ul
          className="
        flex gap-5 text-center items-center justify-center
        "
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
