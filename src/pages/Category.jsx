import React from 'react'
import {useState, useEffect} from 'react'

const Categoria = () => {
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
  console.log(NewsHome)
  useEffect(() => {
     getNews()
  },[])

  
  return (
    <div>Economia</div>
  )
}

export default Categoria