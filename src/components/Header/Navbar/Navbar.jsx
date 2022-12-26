import React, {useState,useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import Logo from '../../../assets/logo_nn.png'
import "./Navbar.css"
import {Link} from "react-router-dom"
import TypesExample from "../../admin-dropdown/Admin-dropdown";
import Salir from "../../Salir/Salir";
import {useNavigate} from 'react-router-dom'



function Navbar() {
  const [ news, setNews ] = useState();
  const [ newsAux, setNewsAux ] = useState();
  const [ isLoading, setIsLoading ] = useState(false);
  const [administrador, setAdministrador] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

  let navigate = useNavigate();

  
  useEffect(()=>{
    const roll =localStorage.getItem('roll')
    setAdministrador(roll)
    const login = localStorage.getItem('token')
    setIsLogin(login)
    
  },[])
  console.log(administrador)
  return (
    <>
    <section className="seccion">
    <nav className="navbar navbar-expand-lg navbarCss">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/#"><img className="imgSize" src={Logo} alt="Logo" /></a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav sections">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="text nav-link">Ingresar</Link>
              
            </li>
            <li className="nav-item">
              <Link to={"/registrarse"} className="text nav-link">Registrarse</Link>
            </li>
            <li>
              { isLogin ?
            <Dropdown>
              <Dropdown.Toggle className='bg-red-300 hover:bg-red-400 border-0 mx-1' variant="success" id="dropdown-basic">
                Categorias
              </Dropdown.Toggle>

              <Dropdown.Menu className=''>
                <Dropdown.Item className='' href="/#">Inicio</Dropdown.Item>
                <Dropdown.Item className='' href="#Economia">Economia</Dropdown.Item>
                <Dropdown.Item className='' href="#Deportes">Deportes</Dropdown.Item>
                <Dropdown.Item className='' href="#Sociedad">Sociedad</Dropdown.Item>
                <Dropdown.Item className='' href="#Politica">Politica</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown> 
          : ""
          }
            </li>
            <>
            {administrador ? <TypesExample />  : "" }
            </>
            <li className="nav-item">
            {isLogin ? < Salir/>  : "" }

            </li>
          </ul>
        </div>
      </div>
    
    </nav>
  </section>
  </>
  );
}

export default Navbar;
