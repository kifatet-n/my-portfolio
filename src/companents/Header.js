import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
        <h1>My Portfolio</h1>
        <nav>
            <ul>
                <li><a href='#about'>Haqqimda</a></li>
                <li><a href='#projects'>Layiheler</a></li>
                <li><a href='#contact'>Elaqe</a></li>
            </ul>
        </nav>
     
    </header>
  )
}

export default Header;