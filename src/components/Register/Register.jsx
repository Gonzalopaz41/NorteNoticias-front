import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.register.css';
import Portada from '../../assets/img-registro-login.jpg'
import Alerta from '../Alertas/Alerta.jsx';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Register() {

  let navigate = useNavigate();

 const [name, setName] = useState('');
 const [surname, setSurname] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [password2, setPassword2] = useState('');

 const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if ([name,surname,email,password,password2].includes('')){
      setAlerta({msg: 'Hay campos vacios', error:true})
      return;
    }

    if(password !== password2){
      setAlerta({msg: 'Los campos no coinciden', error:true})
      return;
    }

    if(password.length < 5){
      setAlerta({msg: 'El password es muy corto, agrega minimo 5 caracteres.', error:true})
      return;
    }
    console.log("despues del if")

    setAlerta({})

    try {
      const respuesta = await axios.post('http://localhost:80/register', {name,surname,email,password})
      console.log(respuesta)
      setAlerta({msg:"Usuario creado correctamente",
      error:false
    })
      navigate('/')
    } catch (error) {
      console.log(error)
      setAlerta ({
        msg:error.response.data.msg,
        error:true
      })
      
    }
  }
  
  const {msg} = alerta

  return (
    <div className="container d-flex my-5 ">
      <img className='container-fluid col-8 portada' src={Portada} alt="portada" />
      <div className=" container-fluid col-lg-4 col-md-6 m-3">
        <div className=" containerlogin">
          <div className="forms-register">
            <div className="form login">
              {msg && <Alerta
                alerta={alerta}
              />}
              <form onSubmit={handleSubmit}>
                <h1 className="title">Registro</h1>
                <div className="input-field">
                  <input onChange={e => setName(e.target.value)} value={name} id="name" type="text" color='white' placeholder="Nombre" name='Nombre'  />
                </div>
                <div className="input-field">
                  <input onChange={e => setSurname(e.target.value)} value={surname} id="surname" type="text" placeholder="Apellido" name='surname'  />
                </div>
                <div className="input-field">
                  <input onChange={e => setEmail(e.target.value)} value={email} id="email" type="email" placeholder="Correo electrónico" name='email'  />
                </div>
                <div className="input-field">
                  <input onChange={e => setPassword(e.target.value)} value={password} id="password" type="password" className="password" name='password' placeholder="Crea una contraseña" />
                </div>
                <div className="input-field">
                  <input onChange={e => setPassword2(e.target.value)} value={password2} type="password" className="password" name='password2' placeholder="Repita contraseña" />
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