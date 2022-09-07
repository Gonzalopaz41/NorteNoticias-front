import React, {useState} from "react";
import Logo from '../../../assets/logo_nn.png'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  const [ news, setNews ] = useState();
  const [ newsAux, setNewsAux ] = useState();
  const [ isLoading, setIsLoading ] = useState(false);

  const getNews = () =>{
    fetch("http://localhost:80/news")
    .then(response => response.json())
    .then(response => {
      setNews(response);
      setNewsAux(response);
      setIsLoading(true);
    })
  }

  const handleChange = (e) => {
    if (e.length >= 3) {
      const newsFiltradas = news.filter((news1) => {
        if (news1.name.toLowerCase().indexOf(e.toLowerCase()) !== -1) {
          return news1;
        }
      })
      setNewsAux(newsFiltradas);
    } else {
      getNews();
    }
  };

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
              <Link to={"/"} className="text nav-link">Ingresar</Link>
              
            </li>
            <li className="nav-item">
              <Link to={"/registrarse"} className="text nav-link">Registrarse</Link>
            </li>
          </ul>
        </div>
        <div className="search p-2">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search"/>
            <button className="btn btn-search" type="submit" onChange={(e) => handleChange(e.target.value)}><ion-icon name="search"></ion-icon></button>
          </form>
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
