
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import Img1 from '../../assets/en-reunin-tolosa-paz-mesa-trabajo-junto-emilio-persico-.webp'
import Img2 from '../../assets/mundial-qatar-2022-y-nos-fuimos-en-como-participar-concurso-lanzo-bizarrap-te-lleva-alentar-seleccion.webp'
import Img3 from '../../assets/conoce-cuales-son-autos-mas-baratos-para-comprar-noviembre.webp'

import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel className='w-2/3 my-5 m-auto'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Les quitarán los planes sociales a los beneficiarios que compraron dólares</h3>
          <p>Así lo anunció la ministra Victoria Tolosa Paz.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mundial de Qatar 2022: “Y nos fuimos en una”, cómo participar del concurso que lanzó Bizarrap y que te lleva a alentar a la Selección</h3>
          <p>El famoso productor invita a reversionar uno de sus éxitos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cuáles son los autos más baratos para comprar en noviembre</h3>
          <p>
          Solamente quedan nueve modelos por debajo de los $ 4 millones.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;