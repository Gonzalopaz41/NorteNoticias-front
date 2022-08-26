import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Register from '../Register/Register';
import '../styles/login.register.css';
import Portada from '../../assets/img-registro-login.jpg'

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:80/login",{
      method: 'POST',
      body:JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  const handleChange = ({target}) => {
    setUser({
      ...user,
      [target.name]: target.value
    })
  }

  return (
  <div className="container d-flex my-5">
    <img className='container-fluid portada col-8' src={Portada} alt="portada" />
    <div className="container-fluid col-lg-4 col-md-6 m-3">
      <div className="containerlogin">
        <div className="forms">
          <div className="form login">
            <h1 className="title text-align-center">Acceso</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input type="email" id="emailUsers" name='email' onChange={handleChange} placeholder="Correo electrónico" required/>
              </div>
              <div className="input-field">
                <input type="password" id="passUsers" name='password' onChange={handleChange} className="password" placeholder="Contraseña" required/>
              </div>
              <div className="checkbox-text d-flex align-items-center justify-content-between mt-3">
                <div className="checkbox-content d-flex align-items-center justify-content-between">
                  <input type="checkbox" id="logCheck" />
                  <label htmlFor="logCheck" className="text">Recordar nombre de usuario</label>
                </div>
                <a href="/" className="text">¿Olvidó su nombre de usuario o contraseña?</a>
              </div>

              <div className="input-field mt-3">
                <button type='submit' className='button p-2'>Iniciar sesión</button>
              </div>
            </form>

            <div className="login-signup">
              <p className="text"> ¿No es miembro? <Link to={"/registrarse"} className="text login-link">Registrate ahora</Link> </p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
  )
}

export default Login;