import { useState } from "react";

import "./Header.css";
import ThemeSwitcher from './ThemeSwitcher';


function Header({ onNav, theme, toggleTheme }) {

  const [hamburgerOpen, sethamburgerOpen] = useState(false);

  const togglehamburger = () => {
    console.log(hamburgerOpen);
    sethamburgerOpen(!hamburgerOpen);
  };

  const toggleoff = () => {
    console.log(hamburgerOpen);
    sethamburgerOpen(false);
  };
  return (


    <header className="header">

      <img src={require("../Images/Logohers.jpg")}
        onClick={onNav} data-page="Articles" href="#Home"
        className="logo"
        alt="logo"
      />
      <nav className="header-nav">

        <ul className={`${hamburgerOpen ? 'header-nav__list' : 'Nav-hidden'}`}>

          <li className="header-nav__item" >
            <a className="header-nav__link" onClick={onNav} data-page="Articles" href="#Home">Home</a></li>


          <li className="header-nav__item">
            <a className="header-nav__link" onClick={onNav} data-page="Style" href="#Style">Style</a></li>



          <li className="header-nav__item">
            <a className="header-nav__link" onClick={onNav} data-page="Beauty" href="#Beauty">Beauty</a></li>


          <li className="header-nav__item">
            <a className="header-nav__link" onClick={onNav} data-page="Cart" href="#Cart">Cart</a></li>
          <li className="header-nav__item">

            <ThemeSwitcher className="header__theme-switcher" theme={theme} toggleTheme={toggleTheme} />
          </li>


        </ul>
        <div className="hamburger">

          <button className="hamburger" onClick={togglehamburger} >
            {/* //  hamburger isOpen={hamburgerOpen}> */}
            {/* "below CSS adapted from https://css.gg under the MIT License" */}
            <i className="gg-menu"></i>
          </button>
        </div>
      </nav>
      <h1 className="header-title"> Happy Place </h1>

    </header>
  );
}

export default Header;
