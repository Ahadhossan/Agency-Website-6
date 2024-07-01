import React, { useEffect, useRef } from "react";
import "./Header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Services",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header-shrink");
    } else {
      headerRef.current.classList.remove("header-shrink");
    }
  };

  useEffect (() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener("scroll", headerFunc)
  }, [])

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    })
  }

  const toggleMenu = () => menuRef.current.classList.toggle("menu-active")

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>Digency</h2>
          </div>
          {/* navigation */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu-item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu-link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* light mode */}
          <div className="light-mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i class="ri-moon-line"></i> Dark
                </span>
              ) : (
                <span>
                  <i class="ri-sun-line"></i> Light
                </span>
              )}
            </span>
          </div>

          {/* mobile navbar */}
          <div className="mobile-menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
