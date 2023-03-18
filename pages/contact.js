import React from 'react'
import ContactsDetails from '../components/ContactsDetails';
import Heading from '../components/Heading';

const ContactPage = () => {
  return (
    <>
      <Heading
        title='Contact Us'
        subtitle='Reach out to our dedicated team for all your Bali real estate inquiries and needs.'
      />
      <ContactsDetails />
    </>
  );
}

export default ContactPage