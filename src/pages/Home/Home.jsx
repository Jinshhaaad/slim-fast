import React from 'react'
import Welcome from '../Welcome/Welcome'
import Aboutus from '../Aboutus/Aboutus';
import Services from '../Services/Services';
import Testimonials from '../Testimonial /Testimonial ';
import Booking from '../Booking/Booking'



function Home() {
  return (
    <>
    <Welcome/>
    
    <Aboutus/>
    <Services/>
    <Testimonials/>
    <Booking/>
   
    
    </>
  )
}

export default Home