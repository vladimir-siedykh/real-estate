import React from 'react'
import Cta from '../components/Cta'
import FeaturedListing from '../components/FeaturedListing'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Steps from '../components/Steps'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedListing />
      <Mission />
      <Steps />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  )
}

export default HomePage