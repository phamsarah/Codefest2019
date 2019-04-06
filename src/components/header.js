import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import logo from '../images/Frame.png'

const Header = ({ siteTitle }) => (
  <div className='Header'>
  <div className="HeaderGroup">
  <img src={logo} width="300" />
    <Link to="/downloads">Help</Link>
    <Link to="/workshops">About</Link>
    <Link to="/workshops">login/Register</Link>
    <Link to="/Download"><button>Download</button></Link>
    </div>
  </div>
)

export default Header
