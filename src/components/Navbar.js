import React from "react";
function Navbar(){
    return (
    <nav className="navbar navbar-expand-sm fixed-top bg-light">
    <div className="container my-8">
      <a href="/" className="navbar-brand text-dark font-weight-bold">
        Ambika Puvvula
      </a>
      <button className="btn btn-outline-info ml-auto mx-3">Contact me</button>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapseNav"
      >
        <span className="fas fa-bars text-dark"></span>
      </button>

      <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
        <div className="navbar-nav">
            <a href="/" className="nav-item nav-link text-dark h6 mx-1 my-auto">Projects</a>
            <a href="/" className="nav-item nav-link text-dark h6 mx-1 my-auto">Blogs</a>
        </div>
      </div>
    </div>
  </nav>
  );
  }

export default Navbar;