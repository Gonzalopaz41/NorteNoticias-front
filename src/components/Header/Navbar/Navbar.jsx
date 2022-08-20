import React from "react";
import Logo from '../../../assets/logo_nn.png'
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbarCss">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/#"><img className="imgSize" src={Logo} alt="Logo" /></a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav sections">
            <li className="nav-item">
              <a className="nav-link" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Ingresar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Registrarse</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="lista d-none d-lg-block">
      <ul className="d-flex justify-content-center">
        <li className="nav-item m-2">
          <a className="nav-link" href="/#">Ultimo momento</a>
        </li>
        <li className="nav-item m-2">
          <a className="nav-link" href="/#">Actualidad</a>
        </li>
        <li className="nav-item m-2">
          <a className="nav-link" href="/#">Política</a>
        </li>
        <li className="nav-item m-2">
          <a className="nav-link" href="/#">Deportes</a>
        </li>
        <li className="nav-item m-2">
          <a className="nav-link" href="/#">Sociedad</a>
        </li>
        <li className="nav-item m-2">
          <a className="nav-link" href="/#">Espectáculos</a>
        </li>
      </ul>
    </div>
  </>
  );
}

export default Navbar;
