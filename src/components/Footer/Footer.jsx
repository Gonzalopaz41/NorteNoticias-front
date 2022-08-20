import React from "react";
// import {Link} from 'react-router-dom'
import Logo from "../../assets/logo_nn.png";
import "../Footer/Footer.css"

function Footer() {
  return (
    <div className="container-fluid bg-dark p-5">
      <div className="row d-flex text-center align-items-center">
        <div className="col-md-3 p-2">
          <img className="logoSize" src={Logo} alt="Logo" />
        </div>
        <div className="col-md-3 text-white">
          <ul className="list-unstyled">
            <li>Redacción</li>
            <li>Edición</li>
            <li>Contacto</li>
            <li>Empleo</li>
          </ul>
        </div>
        <div className="col-md-3 text-white">
          <ul className="list-unstyled">
            <li>Política de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Mapa del sitio</li>
            <li>Anúnciese con nosotros</li>
          </ul>
        </div>
        <div className="col-md-3 text-white">
          <ul className="list-unstyled">
            <li>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-youtube"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
            </li>
            <li>Info Contacto</li>
            <li>QR Data Fiscal</li>
          </ul>
        </div>
      </div>

        <div class="container">
          <div class="row gy-3">
              <p class="mb-0 d-flex justify-content-center text-white py-2">
                ©2022 Norte Noticias. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
  );
}

export default Footer;
