import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import logo from '../images/suplogo.png'

const Header = ({ siteTitle }) => (
  <div className='Header'>
  <div className="HeaderGroup">
  <img src={logo} width="300" />
    <Link to="/downloads">How it Works</Link>
    <Link to="/workshops">About Us </Link>
    <Link to="/Download"><button>Download</button></Link>
    </div>
  </div>
)

export default Header
