import React, { Component } from "react";
import icon from './icon.png';
import { Link, animateScroll as scroll } from "react-scroll";



export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={icon} // logo will be here
            className="nav-logo"
            alt="Raz Levy"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Platforms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
              >
                <i class="fab fa-github fa-lg" onClick={()=> window.open("https://github.com/RLeDEV", "_blank")} aria-hidden="true"></i> 
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
              >
                <i class="fab fa-linkedin fa-lg" onClick={() => window.open("https://www.linkedin.com/in/raz-levy/")} aria-hidden="true" style={{'color': '#007bb6'}}></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
