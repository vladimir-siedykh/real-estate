import Image from 'next/image';
import Link from 'next/link';
import iconPlace from '../public/images/place.svg'
import iconPhone from '../public/images/phone.svg'
import iconMail from '../public/images/mail.svg'

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
            <ul className='max-w-[max-content] lg:mx-auto'>
              <h5 className='heading-5 mb-4'>Useful Links</h5>
              <li>
                <Link href='/'>Listing</Link>
              </li>
              <li>
                <Link href='/'>About Us</Link>
              </li>
              <li>
                <Link href='/'>Contact Us</Link>
              </li>
              <li>
                <Link href='/'>Our Team</Link>
              </li>
            </ul>
          </nav>
          <div className='max-w-[max-content] lg:mx-auto'>
            <h5 className='heading-5 mb-4'>Get in Touch</h5>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'>
                <Image src={iconPlace} alt='' />
                <p className='max-w-[210px]'>
                  123 Anywhere Street, Any City, 12345 ST, Indonesia
                </p>
              </div>
              <div className='flex gap-2'>
                <Image src={iconPhone} alt='' />
                <a href='tel:+1234567890'>+123 456 7890</a>
              </div>
              <div className='flex gap-2'>
                <Image src={iconMail} alt='' />
                <a href='mailto:hello@realestate.com'>hello@realestate.com</a>
              </div>
            </div>
          </div>
          <div className='md:ml-none'>
            <h5 className='heading-5 mb-4'>Newsletter</h5>
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
      </div>
    </section>
  );
}

export default Footer