import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../components/styles/error404.css'

function Error404() {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <div className="content">
        <h2 className="header" data-text="404">404</h2>
        <h4>La página que buscas no existe</h4>
        <div className="btns">
          <a onClick={()=> navigate('/')}>Volver al inicio</a>
        </div>
      </div>
    </div>
    
   )
}

export default Error404