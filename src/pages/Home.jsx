import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Banner from '../components/Home/Banner'

import BannerBottom from '../components/Home/BannerBottom'
import Welcome from '../components/Home/Welcome'
import Subject from '../components/Home/Subject'
import StudentSay from '../components/Home/StudentSay'

import Addmition from '../components/Home/Addmition'
import Testimonial from '../components/Home/Testimonial'
import Footer from '../components/Home/Footer'


const Home = () => {
  return (
    <div>
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
    {/* <Nav /> */}
    <Header />
    <Banner />
    <BannerBottom />
    <Welcome />
    <Subject />
    <StudentSay />
    {/* <StudentSay /> */}
    <Addmition />
    {/* <Testimonial /> */}
    <Footer />

    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
    class="bi bi-arrow-up"></i></a>
    </div>
  )
}

export default Home