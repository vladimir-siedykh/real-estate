import React from 'react'
import Cta from '../components/Cta';
import Heading from '../components/Heading'
import ServicesEstate from '../components/ServicesEstate';
import ServicesFeatured from '../components/ServicesFeatured';

const ServicesPage = () => {
  return (
    <>
      <Heading
        title='Our Services'
        subtitle='At Real Estate Bali, we offer comprehensive solutions for buying, selling, and managing properties, ensuring a stress-free experience.'
      />
      <ServicesFeatured />
      <ServicesEstate />
      <Cta />
    </>
  );
}

export default ServicesPage