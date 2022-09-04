import React, {useState} from 'react';
import Header from './components/Header/Header'
import { Route, Routes } from "react-router-dom";
//import Home from "./pages/home" 
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Loader from './components/Loader/Loader';
import Admin from './pages/admin';

function App() {
  // const [isLogin, setIsLogin] = useState();
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/registrarse' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        
        {/* <Route path='/login' element={<Login/>}/> */}
      </Routes> 
      <Footer/> 
    </>
  );
}

export default App;
