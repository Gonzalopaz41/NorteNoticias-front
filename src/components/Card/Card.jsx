import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loader from '../Loader/Loader'

function CardsHome() {
    const [NewsHome, setNewsHome] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const token = localStorage.getItem('token')

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

  useEffect(() => {
    // getData()
    getNews()
    //console.log(listUsers)
  },[])

  return (
  <div className='grid gap-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-5 mx-4 items-center  md:m-auto '>
    
      {
        isLoading
        ?
          NewsHome?.map(news=>(
            <Card className='shadow-lg'  style={{ width: '18rem' }} key={news._id}>
              <Card.Img variant="top" src={news.img}/>
              <Card.Body>
                <h5 className='mb-2'>{news.category}</h5>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>
                  {news.introduction}
                </Card.Text>
                <Button className='mt-3' variant="primary">Noticia completa</Button>
              </Card.Body>
            </Card>
          ))
          

        :
        <Loader/>
          
      }
  </div>
   
  );
}

export default CardsHome;