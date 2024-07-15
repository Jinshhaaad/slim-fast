import React from 'react'
import Welcome from '../Welcome/Welcome'
import Partner from '../Partner/Partner'
import Aboutus from '../Aboutus/Aboutus';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import Testimonials from '../Testimonial /Testimonial ';
import Online from '../Online/Online'
import Blogs from '../Blogs/Blogs';
import Booking from '../Booking/Booking'



function Home() {
  return (
    <>
    <Welcome/>
    <Partner/>
    <Aboutus/>
    <Services/>
    <Doctors/>
    <Testimonials/>
    <Booking/>
    <Blogs/>
   <Online/>
   
    
    </>
  )
}

export default Home