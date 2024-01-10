import React from "react";
import Navitem from "./Navitem";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const pos = element.offsetTop - 96
    window.scrollTo({top:pos, behavior: "smooth" });
  }
};

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center h-24 z-50 bg-white">
      <ul className="flex flex-row w-full justify-around items-center font-montserrat text-xl">
        <li>
          <button onClick={() => scrollToSection("section1")}>Welcome</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("section2")}>Portfolio</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("section3")}>TechStack</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
