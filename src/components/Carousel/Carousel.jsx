import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
      <Carousel className='w-6/12  mx-auto my-5 space-y-4 '>
        <h2 className=' text-2xl font-medium my-3  text-center'>Noticias destacadas</h2>
        <Carousel.Item className='d-block'>
          <img
            className='w-auto'
            src="https://img.lagaceta.com.ar/fotos/notas/2022/09/10/1200x799_cracks-sudamericanos-en-el-psg-lionel-messi-junto-neymar-foto-informacionpsg-960728-153743.webp"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='shrink-0 rounded-xl'>
          <img
            className='w-auto'
            src="https://img.lagaceta.com.ar/fotos/notas/2022/09/10/1200x799_cracks-sudamericanos-en-el-psg-lionel-messi-junto-neymar-foto-informacionpsg-960728-153743.webp"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='shrink-0 rounded-xl'>
          <img
            className='w-auto'
            src="https://img.lagaceta.com.ar/fotos/notas/2022/09/10/1200x799_cracks-sudamericanos-en-el-psg-lionel-messi-junto-neymar-foto-informacionpsg-960728-153743.webp"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;