import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useWindowSize from "../hooks/useWindowSize";
import EasyModal from "../modals/EasyModal";
import ResumesModal from "../modals/ResumesModal";

export default function Navbar(props) {
  const [currentPosition, setCurrentPosition] = useState("");
  const [isMobile, setIsMobile] = useState(true);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="header" style={!isHamburgerOpen ? { height: "30px" } : {}}>
      {isMobile && (
        <div
          className="hamburger-control"
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        >
          <div className={`animated-icon ${isHamburgerOpen && "open"}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      <div
        className="navigation"
        style={{
          transition: "0.25s ease-in-out",
          marginBottom: !isMobile || isHamburgerOpen ? "auto" : -100,
        }}
      >
        <div className="home-container">
          <NavLink
            className="nav-link-wrapper home"
            to="/Portfolio/"
            exact={true}
            onClick={() => setCurrentPosition("Home")}
          >
            <FontAwesomeIcon icon="fa-solid fa-house" size="sm" /> Home
          </NavLink>
        </div>

        <div className="links-container">
          <div className="header-option-wrapper github">
            <NavLink
              className="nav-link-wrapper github"
              to="/Portfolio/github"
              onClick={() => setCurrentPosition("Github")}
            >
              <FontAwesomeIcon icon="fa-brands fa-github" /> Github
            </NavLink>
          </div>

          <div className="header-option-wrapper linkedin">
            <a
              id="link-wrapper linkedin"
              href="https://www.linkedin.com/in/james-d-hales"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" /> LinkedIn
            </a>
          </div>

          <div className="header-option-wrapper resumes">
            <p
              id="show-resumes-button"
              onClick={() => setShowDownloadOptions(true)}
            >
              <FontAwesomeIcon icon="fa-regular fa-file" /> Resume
            </p>
          </div>

          <div className="header-option-wrapper about">
            <NavLink className="nav-link-wrapper" to="/Portfolio/about">
              <FontAwesomeIcon icon="fa-regular fa-circle-question" /> About &
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      <div className="header-title">
        {currentPosition === "Home" || currentPosition === "Github" ? null : (
          <h1>{currentPosition}</h1>
        )}
      </div>

      <EasyModal
        isOpen={showDownloadOptions}
        onRequestClose={() => setShowDownloadOptions(!showDownloadOptions)}
        content={{ width: "600px", height: "250px" }}
        overlay={{ backgroundColor: "transparent" }}
      >
        <ResumesModal setIsOpen={setShowDownloadOptions} />
      </EasyModal>
    </div>
  );
}
