import React from "react";
import { Link, Logo, NavBar, NavLinks } from "./NavBarStyle";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <NavBar>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <Logo />
        </a>

      <NavLinks>
        <Link>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </Link>
        <Link>
          <a
            href="#project"
            onClick={() => handlePageChange("Project")}
            className={currentPage === "Project" ? "nav-link active" : "nav-link"}
          >
            Work
          </a>
        </Link>
        <Link>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </Link>
        <Link>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </Link>
      </NavLinks>
    </NavBar>
  );
}

export default NavTabs;
