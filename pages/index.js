import React from 'react'
import Cta from '../components/Cta'
import FeaturedListing from '../components/FeaturedListing'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Steps from '../components/Steps'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedListing />
      <Mission />
      <Steps />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}

export default HomePage