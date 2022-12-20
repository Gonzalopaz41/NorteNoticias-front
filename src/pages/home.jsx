import React from 'react'
import { useState, useEffect } from 'react';
import Carrousel from '../components/Carousel/Carousel';
import CardsHome from '../components/Card/Card';
import NavCategory from '../components/Header/Navbar/NavCategory';




const Home = () => {
  
  
  return (
    
    <>
    <NavCategory/>
    <Carrousel/>
    <CardsHome />
    </>
    
  )
  
}

export default Home