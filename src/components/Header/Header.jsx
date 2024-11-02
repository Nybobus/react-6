import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const toggleBurger = () => {
        setIsActive(!isActive)
    }

    const closeBurger = () => {
        setIsActive(false)
    }

    console.log(isActive);

  return (
    <>
      <header className="header">
        <div className="container">
            <div className="header__wrapper">

                <img onClick={toggleBurger} src="https://upload.wikimedia.org/wikipedia/commons/9/9e/CyberLeninka-logo.png" alt="" className="logo" />

                <div className={`header__menu ${isActive ? 'active' : ''}`}>
                    <a href="">Home</a>
                    <a href="">Catalog</a>
                    <a href="">Portfolio</a>
                    <a href="">Contacts</a>
                </div>

                <div onClick={closeBurger} className={`burger ${isActive ? 'active' : ''}`}>
                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>
      </header>
    </>
  )
}

export default Header
