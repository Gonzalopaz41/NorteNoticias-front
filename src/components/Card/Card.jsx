import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loader from '../Loader/Loader'
import {useNavigate} from 'react-router-dom';

function CardsHome() {
    const [NewsHome, setNewsHome] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const token = localStorage.getItem('token')
    const navigate = useNavigate();

  const getNews = () =>{
    fetch('http://localhost:80/admin/get', {
    method: 'POST',
    headers: {
    'acces_token': token,
    'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(response => {
      setNewsHome(response);
      setIsLoading(true);
    })
  }

  const clickNews = (id) =>{
    localStorage.setItem("id", id)
  }

  let newsEconomia = NewsHome.filter(categoria => categoria.category.includes("Economia"))
  let newsDeportes = NewsHome.filter(categoria => categoria.category.includes("Deportes"))
  let newsSociedad = NewsHome.filter(categoria => categoria.category.includes("Sociedad"))
  let newsPolitica = NewsHome.filter(categoria => categoria.category.includes("Politica"))

  

  useEffect(() => {
    // getData()
    getNews()
    //console.log(listUsers)
  },[])

  return (
  <>
    <section id='Economia'>
      <h3 className='font-bold uppercase text-xl mx-4'>Economia</h3>
        <div className='grid gap-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-5 mx-4 items-center  md:m-auto '>
          
            {
              isLoading
              ?
                newsEconomia?.map(news=>(
                  <Card className='shadow-lg'  style={{ width: '18rem' }} key={news._id}>
                    <Card.Img variant="top" src={news.img}/>
                    <Card.Body>
                      <h5 className='mb-2'>{news.category}</h5>
                      <Card.Title>{news.title}</Card.Title>
                      <Card.Text>
                        {news.introduction}
                      </Card.Text>
                      <button className='mt-3 btn btn-primary' onClick={()=>{
                          clickNews(news._id)
                          navigate('/news/' +news._id)
                        }}>Noticia completa</button>
                    </Card.Body>
                  </Card>
                ))
                

              :
              <Loader/>
                
            }
        </div>
    </section>

    <section id='Deportes'>
      <h3 className='font-bold uppercase text-xl mx-4'>Deportes</h3>
        <div className='grid gap-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-5 mx-4 items-center  md:m-auto '>

          {
            isLoading
            ?
              newsDeportes?.map(news=>(
                <Card className='shadow-lg'  style={{ width: '18rem' }} key={news._id}>
                  <Card.Img variant="top" src={news.img}/>
                  <Card.Body>
                    <h5 className='mb-2'>{news.category}</h5>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>
                      {news.introduction}
                    </Card.Text>
                    <button className='mt-3 btn btn-primary' onClick={()=>{
                          clickNews(news._id)
                          navigate('/news/' +news._id)
                        }}>Noticia completa</button>
                  </Card.Body>
                </Card>
              ))
              

            :
            <Loader/>
              
          }
        </div>
    </section>

    <section id='Sociedad'>
      <h3 className='font-bold uppercase text-xl mx-4'>Sociedad</h3>
        <div className='grid gap-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-5 mx-4 items-center  md:m-auto '>
          
            {
              isLoading
              ?
                newsSociedad?.map(news=>(
                  <Card className='shadow-lg'  style={{ width: '18rem' }} key={news._id}>
                    <Card.Img variant="top" src={news.img}/>
                    <Card.Body>
                      <h5 className='mb-2'>{news.category}</h5>
                      <Card.Title>{news.title}</Card.Title>
                      <Card.Text>
                        {news.introduction}
                      </Card.Text>
                      <button className='mt-3 btn btn-primary' onClick={()=>{
                          clickNews(news._id)
                          navigate('/news/' +news._id)
                        }}>Noticia completa</button>
                    </Card.Body>
                  </Card>
                ))
                

              :
              <Loader/>
                
            }
        </div>
    </section>

    <section id='Politica'>
      <h3 className='font-bold uppercase text-xl mx-4'>Politica</h3>
        <div className='grid gap-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-5 mx-4 items-center  md:m-auto '>
          
            {
              isLoading
              ?
                newsPolitica?.map(news=>(
                  <Card className='shadow-lg'  style={{ width: '18rem' }} key={news._id}>
                    <Card.Img variant="top" src={news.img}/>
                    <Card.Body>
                      <h5 className='mb-2'>{news.category}</h5>
                      <Card.Title>{news.title}</Card.Title>
                      <Card.Text>
                        {news.introduction}
                      </Card.Text>
                      <button className='mt-3 btn btn-primary' onClick={()=>{
                          clickNews(news._id)
                          navigate('/news/' +news._id)
                        }}>Noticia completa</button>
                    </Card.Body>
                  </Card>
                ))
                

              :
              <Loader/>
                
            }
        </div>
    </section>


  </>
  );
}

export default CardsHome;