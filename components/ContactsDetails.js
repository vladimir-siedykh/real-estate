import Image from 'next/image';
import iconPlace from '../public/images/icons/place.svg';
import iconPhone from '../public/images/icons/phone.svg';
import iconMail from '../public/images/icons/mail.svg';
import imgContacts from '../public/images/cta.png'
import ConatctForm from './ConatctForm';

const ContactsDetails = () => {
  return (
    <section className='section'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid gap-20 grid-cols-1 xl:grid-cols-[368px_1fr]'>
          <div className='max-w-[max-content] xl:mx-auto'>
            <h3 className='heading-3 mb-4'>Get in Touch</h3>
            <div className='flex flex-col gap-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <div className='flex gap-2 items-center'>
                <Image
                  src={iconPlace}
                  alt=''
                  width={24}
                  height={24}
                  className='w-6 h-6'
                />
                <p className=''>
                  123 Anywhere Street, Any City, 12345 ST, Indonesia
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <Image
                  src={iconPhone}
                  alt=''
                  width={24}
                  height={24}
                  className='w-6 h-6'
                />
                <a href='tel:+1234567890'>+123 456 7890</a>
              </div>
              <div className='flex gap-2 items-center'>
                <Image
                  src={iconMail}
                  alt=''
                  width={24}
                  height={24}
                  className='w-6 h-6'
                />
                <a href='mailto:hello@realestate.com'>hello@realestate.com</a>
              </div>
              <Image
                src={imgContacts}
                width={368}
                height={240}
                alt='contact foto'
                className='rounded-2xl mt-6 w-full h-auto'
              />
            </div>
          </div>
          <ConatctForm />
        </div>
      </div>
    </section>
  );
};

export default ContactsDetails;
