import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
      <div className="Navbar">
        <div className="container">
          <div className="Navleft"> 
            <Link className="logo" to="/">
              <img src="https://services.etin.space/wts/wp-content/uploads/2020/06/logo.png" alt="WTS Blog" class="img-fluid" />
            </Link>
          </div>
          <div className="Navright">
            <div className="NavLinks d-sm-block d-none">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/categories">Categories</Link></li>
              </ul>
            </div>
            <div className="collapse-menu d-block dm-sm-none">
              <i className="fas fa-bars"></i>
            </div>
            <div className="search-btn d-block dm-sm-none">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    )
}
