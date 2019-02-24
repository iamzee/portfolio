import React from 'react';

const Navigation = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label for="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background" />

    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#profile-section" className="navigation__link">Profile</a>
        </li>
        <li className="navigation__item">
          <a href="#academic-section" className="navigation__link">
            Qualifications
          </a>
        </li>
        <li className="navigation__item">
          <a href="#courses-section" className="navigation__link">Courses</a>
        </li>
        <li className="navigation__item">
          <a href="#publication-section" className="navigation__link">
            Publications
          </a>
        </li>
        <li className="navigation__item">
          <a href="#contact-section" className="navigation__link">Contact Me</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
