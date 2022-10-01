import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/login.register.css';
import Portada from '../../assets/img-registro-login.jpg'
import Alerta from '../Alertas/Alerta.jsx';
import  axios  from 'axios';
import {useNavigate} from 'react-router-dom'


function Login() {
  let navigate = useNavigate();

  const [email, setEmail]  = useState ('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState('');

  const handleSubmit = async e =>{
    e.preventDefault();

    if([email,password].includes('')){
      setAlerta({msg:"hay campos vacios", error:true})
      return;
    }
    setAlerta({})

    try {
      const respuesta = await axios.post('http://localhost:80/login', {email,password})
      console.log(respuesta)
      if (respuesta.data.token !== undefined ) {
          localStorage.setItem("token", respuesta.data.token)
          setAlerta({msg:"usuario logueado",error:false})
          navigate('/home' , {replace:true})
          // axios.post('http://localhost:80/login',
          // headers:{'authorization':respuesta.data.token})
          }   
      if (respuesta.data.rollAdmin === true){
        localStorage.setItem("roll", respuesta.data.rollAdmin)
      }
      window.location.reload()
          
                
    } 
    catch (error) {
        setAlerta ({
          msg:error.response.data.msg,
          error:true
        }) 
    } 
  }  
        
const {msg} = alerta

  return (
  <div className="container d-flex my-5">
    <img className='container-fluid portada col-8' src={Portada} alt="portada" />
    <div className="container-fluid col-lg-4 col-md-6 m-3">
      <div className="containerlogin">
        <div className="forms">
          <div className="form login">
            <h1 className="title text-align-center">Acceso</h1>
              {msg && <Alerta
                  alerta={alerta}
                />}
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input type="email" id="email" name='email' onChange={e => setEmail(e.target.value)} value={email} placeholder="Correo electrónico" />
              </div>
              <div className="input-field">
                <input type="password" id="password" name='password' onChange={e => setPassword(e.target.value)} value={password} className="password" placeholder="Contraseña" />
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