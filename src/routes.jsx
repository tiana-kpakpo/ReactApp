// import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'


import Login from './Pages/Login';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import notFound from './Pages/notFound';
import Signup from './Pages/Signup';

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      

    </Routes>


    </BrowserRouter>
    </>
  )
}

export default Router;