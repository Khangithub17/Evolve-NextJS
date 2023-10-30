import Link from "next/link";
import { useState } from "react";

const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [servicesSubMenu, setServicesSubMenu] = useState(false); // Step 1: Submenu state

  const active = (value) => setActiveMenu(value === activeMenu ? null : value);

  // Step 2: Function to toggle the Services submenu
  const toggleServicesSubMenu = () => {
    setServicesSubMenu(!servicesSubMenu);
  };

  return (
    <div
      className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`}
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <a href="index.html">
        <img
                      alt="logo"
                      src="assets/img/logo2.png"
                      className="logo2"
                      style={{width: "150px",height: "auto"}}
                    />
        </a>
      </div>
      <ul>
        <li className={`menu-item-has-children ${activeMenu === "Home" ? "active" : ""}`}>
          <Link legacyBehavior href="/">
            Home
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="about">
            About
          </Link>
        </li>
        <li>
          <a href="JavaScript:void(0)" onClick={toggleServicesSubMenu}>Services</a> {/* Step 3: Add click handler */}
          {servicesSubMenu && ( // Render submenu items if the submenu is active
            <ul className="submenu">
              <li>
                <Link legacyBehavior href="web-development">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="wordpress-development">
                  WordPress & Maintaining
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
          )}
        </li>
        <li>
          <Link legacyBehavior href="blog-grid">
            Blog
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="contacts">
            Contact
          </Link>
        </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};

export default MobileHeader;
