import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import '../styles/login.register.css';
import Portada from '../../assets/img-registro-login.jpg'
function Register() {

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    delete user.password2;
    fetch("http://localhost:80/register",{
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
    <div className="container d-flex my-5 ">
      <img className='container-fluid col-8 portada' src={Portada} alt="portada" />
      <div className=" container-fluid col-lg-4 col-md-6 m-3">
        <div className=" containerlogin">
          <div className="forms-register">
            <div className="form login">
              <form onSubmit={handleSubmit}>
                <h1 className="title">Registro</h1>
                <div className="input-field">
                  <input onChange={handleChange} id="name" type="text" color='white' placeholder="Nombre" name='name' required />
                </div>
                <div className="input-field">
                  <input onChange={handleChange} id="surname" type="text" placeholder="Apellido" name='surname' required />
                </div>
                <div className="input-field">
                  <input onChange={handleChange} id="email" type="email" placeholder="Correo electrónico" name='email' required />
                </div>
                <div className="input-field">
                  <input onChange={handleChange} id="password" type="password" className="password" name='password' placeholder="Crea una contraseña" required/>
                </div>
                <div className="input-field">
                  <input onChange={handleChange} type="password" className="password" name='password2' placeholder="Repita contraseña" required/>
                </div>
                <div className="input-field mt-3">
                  <button type='submit' className='button p-2'>Registrarse</button>
                </div>
              </form>
              <div className="login-signup">
                <p className="text">¿Ya eres miembro?<Link to={"/"} className="text login-link"> Acceder</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;