import React from 'react'
import ContactsDetails from '../components/ContactsDetails';
import Heading from '../components/Heading';

const ContactPage = () => {
  return (
    <>
      <Heading title='Contact Us' subtitle='This is the contact page' />
      <ContactsDetails />
    </>
  );
}

export default ContactPage