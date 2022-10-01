import React from 'react'
import {Link, Routes, Router} from 'react-router-dom'
import './login.css'
import imageRestaurant from '../img/restaurant.png'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-dark navbar-expand-lg">
  
  <img class="imgNav" src={imageRestaurant} alt="Bootstrap"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a><Link to="/" class="nav-link">Home</Link></a>
        </li>
        <li class="nav-item">
        <a><Link to="/Menu" class="nav-link">Menu</Link></a>
        </li>
        <li class="nav-item">
          <a><Link to="/ManagerLogin"  class="nav-link">Admin</Link></a>
        </li>
      </ul>
    </div>

</nav>
    </>
  )
}

export default Navbar