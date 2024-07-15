import React from 'react'
import Booking from '../Booking/Booking';
import Online from '../Online/Online'
import Partner from '../Partner/Partner';
// import Googlemap from '../Googlemap/Googlemap'
function Contact() {
  return (
    <>
    <Booking/>
    {/* <Googlemap/> */}
    <Partner/>
    <Online/>
    </>
  )
}

export default Contact