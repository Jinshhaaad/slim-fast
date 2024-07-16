import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import Services from '../pages/Services/Services'
import Testimonials from '../pages/Testimonials/Testimonials'
import Contact from '../pages/Contact/Contact'

function LayoutRoutes() {
  return (
   <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/slim-fast' element={<Home/>} />
         <Route path='/About' element={<About/>} />
         <Route path='/Services' element={<Services/>} />
         <Route path='/Testimonials' element={<Testimonials/>} />
        <Route path='/Contact' element={<Contact/>} />  
        <Route path='/*' element={<NotFound/>} />



    </Routes>
    <Footer/>
   </Router>
  )
}

export default LayoutRoutes