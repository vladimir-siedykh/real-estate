import Image from 'next/image';
import Link from 'next/link';
import iconPlace from '../public/images/icons/place.svg';
import iconPhone from '../public/images/icons/phone.svg';
import iconMail from '../public/images/icons/mail.svg';

const Footer = () => {
  return (
    <section className='section bg-[#FAFAFA]'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid gap-4 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div className=''>
            <h1 className='heading-5 mb-4'>R&E</h1>
            <p className='max-w-sm'>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <nav className=''>
            <div className='max-w-[max-content] lg:mx-auto'>
              <div className='heading-5 mb-4'>Useful Links</div>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
                <li>
                  <Link href='/services'>Services</Link>
                </li>
                <li>
                  <Link href='/listing'>Listing</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='max-w-[max-content] lg:mx-auto'>
            <div className='heading-5 mb-4'>Get in Touch</div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2 items-center'>
                <Image
                  src={iconPlace}
                  alt=''
                  width={24}
                  height={24}
                  className='w-6 h-6'
                />
                <p className='max-w-[210px]'>
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
            </div>
          </div>
          <div className='md:ml-none'>
            <div className='heading-5 mb-4'>Newsletter</div>
            <form>
              <div className='flex flex-col gap-4 max-w-full'>
                <input
                  className='max-w-full border-[1px] border-gray-500 px-4 py-2 rounded-[2rem]'
                  type='text'
                  placeholder='Your Email'
                />
                <button className='btn'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between gap-2 text-sm sm:text-base mt-10'>
          <div>© {new Date().getFullYear()} R&E. All Rights Reserved.</div>
          <div>
            Developed by{' '}
            <Link className='underline' href='https://www.siedykh.com' target='_blank'>
              VSD&D
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
