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
    if (isOpen) return "navMenu active";
    return "navMenu";
  }, [isOpen]);

  return (
    <nav>
      <div className="navMobile">
        <h3 id="logo" className="logo">
          <a href="/">ricoputra</a>
        </h3>

        <div className="navToggle" onClick={ toggle }>
          <img
            src={ toggleIcon }
            alt="nav-toggle"
          />
        </div>
      </div>

      <div className={ navMenuClasses }>
        {routes.map((route) => (
          <a key={ route.link } className="navMenu-item" href={ route.link }>
            { route.label }
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavBar