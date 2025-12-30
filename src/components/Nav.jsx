import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LibraryLogo from '../assets/Library.svg'

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </a>

        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">Home</a>
          </li>

          <li className="nav__list">
            <a href="/" className="nav__link">Books</a>
          </li>

          <button className="btn__menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </ul>
      </div>
    </nav>
  )
}
