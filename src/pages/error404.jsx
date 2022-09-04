import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../components/styles/error404.css'

function Error404() {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <div class="content">
        <h2 class="header" data-text="404">404</h2>
        <h4>La página que buscas no existe</h4>
        <div class="btns">
          <a onClick={()=> navigate('/')}>Volver al inicio</a>
        </div>
      </div>
    </div>
    
   )
}

export default Error404