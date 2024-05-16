import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link className="nav-item" href="Home">Home</Link>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          
          <Link className="nav-item" href="mystore">Store</Link>
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Header
