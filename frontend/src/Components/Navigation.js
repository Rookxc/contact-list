import Button from "./Button";
import {useState, useEffect} from 'react';

function Logout(){
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("userID", "");
    window.location.href = "/";
}

function Navigation(props){
  if(localStorage.getItem("loggedIn") === "true"){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Contactfull</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">              
            <li className="nav-item active">
                <a className="nav-link" href="/contact_list">Contact list</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/" onClick={Logout}>Logout</a>
            </li>
            </ul>
          </div>
      </nav>
      )
  }
  else{
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Contactfull</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">         
            <ul className="navbar-nav">  
            <li className="nav-item active">
                <a className="nav-link" href="/register">Register</a>
              </li> 
              <li className="nav-item active">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
      </nav>
    )
  }
  
}

export default Navigation;