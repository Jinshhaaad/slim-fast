import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import Services from '../pages/Services/Services'
import Doctors from '../pages/Doctors/Doctors'
import Contact from '../pages/Contact/Contact'
import Blog from '../pages/Blog/Blog'

function LayoutRoutes() {
  return (
   <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/q1b-healthcare' element={<Home/>} />
         <Route path='/About' element={<About/>} />
         <Route path='/Services' element={<Services/>} />
       <Route path='/Doctors' element={<Doctors/>} />
        <Route path='/Blogs' element={<Blog/>} />
        <Route path='/Contact' element={<Contact/>} />  
        <Route path='/*' element={<NotFound/>} />



    </Routes>
    <Footer/>
   </Router>
  )
}

export default LayoutRoutes