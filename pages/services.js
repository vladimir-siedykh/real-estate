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
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <ServicesFeatured />
      <ServicesEstate />
      <Cta />
    </>
  );
}

export default ServicesPage