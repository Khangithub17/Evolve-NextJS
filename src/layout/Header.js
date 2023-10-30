import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { background: "transparent" }
      }
    >
      <div className="container">
        <div className="nav d-flex justify-content-between"> {/* Updated this line */}
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <img alt="logo" src="assets/img/logo-black.png" />
                  ) : (
                    <img
                      alt="logo"
                      src="assets/img/logo2.png"
                      className="logo2"
                      style={{width: "150px",height: "auto"}}
                    />
                  )}
                </a>
              </Link>
            </div>
          </div>
          <ul className="menu">
           <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
                <ul className="sub-menu">
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="about">
                  About 
                </Link>
              
              </li>
              <li>
                <Link legacyBehavior href="pricing">
                  Pricing
                </Link>
              
              </li>
              
              <li>
              <Link legacyBehavior href="services">
                      services
                    </Link>
                    <ul className="sub-menu">
                    <li>
        <Link legacyBehavior href="web-development">
          Web Design & Development
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="wordpress-development">
          WordPress  & Maintaining
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="graphicDesign">
          Graphic Designing
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="branding">
          Branding
        </Link>
      </li>    
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="blog-grid">
                  Blog
                </Link>
                
                <ul className="sub-menu">
                
                </ul>
      
              </li>
              
              <li>
                <Link legacyBehavior href="contacts">
                  contacts
                </Link>
              </li>
            {/* ... Your menu items ... */}
          </ul>
          <div className="right-menu d-flex align-items-center"> {/* Added this div */}
            <form id="content">
              <input
                type="text"
                name="input"
                className={`input ${searchToggle ? "square" : ""}`}
                id="search-input"
              />
              <button
                type="reset"
                className={`search ${searchToggle ? "close" : ""}`}
                id="search-btn"
                onClick={() => setSearchToggle(!searchToggle)}
              />
            </form>
            <Link legacyBehavior href="/contacts">
              <a className="themebtu">Get Started</a>
            </Link>
          </div>
          <div
            className="bar-menu"
            onClick={() => setToggle(true)}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};

export default Header;
