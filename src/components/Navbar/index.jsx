import React, { useMemo, useState } from 'react'
import "./styles.css";

const routes = [
  { link: "/", label: "Home" },
  { link: "/projects", label: "Projects" },
  { link: "/posts", label: "Posts" },
  { link: "/docs", label: "Docs" }
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const toggleIcon = useMemo(() => {
    if (isOpen) return "/icons/close.svg";
    return "/icons/hamburger.svg";
  }, [isOpen]);

  const navMenuClasses = useMemo(() => {
    if (isOpen) return "nav-menu active";
    return "nav-menu";
  }, [isOpen]);
  const navToggleClasses = useMemo(() => {
    if (isOpen) return "nav-toggle active";
    return "nav-toggle";
  }, [isOpen]);


  return (
    <nav>
      <div className="nav-mobile">
        <h3 id="logo" className="logo">
          <a href="/">ricoputra</a>
        </h3>

        <div className={ navToggleClasses } onClick={ toggle }>
          <div className="nav-toggle-content">
            <img
              src={ toggleIcon }
              alt="nav-toggle"
              className="nav-toggle-icon"
            />
          </div>
        </div>
      </div>

      <div className={ navMenuClasses }>
        {routes.map((route) => (
          <a key={ route.link } className="nav-menu-item" href={ route.link }>
            { route.label }
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavBar