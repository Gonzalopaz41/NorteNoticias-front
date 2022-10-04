import { useState, useEffect } from 'react';

import axios from 'axios';
import Loader from '../Loader/Loader';

function Carrousel() {
  const [useCarrousel, setNewsCarrousel] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token');

  


  const carrouselNews = () => {
    fetch('http://localhost:80/admin/get', {
    method: 'POST',
    headers: {
    'acces_token': token,
    'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(response => {
      setIsLoading(true)
      setNewsCarrousel(response);
    })
  }

  useEffect(() => {
    carrouselNews()
  },[])
  console.log(useCarrousel)

    return (
    <>
    {isLoading ? 
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      {
        useCarrousel?.map(carrousel=>(
          <div key={carrousel._id} class="carousel-inner">
            <div class="carousel-item active">
              <img src={carrousel.img} class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>{carrousel.title} </h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          </div>
        ))
      
      }
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    :
    <Loader/>  
    }
   </>
    );
  }
  
  export default Carrousel;