import Image from 'next/image';
import Link from 'next/link';
import iconPlace from '../public/images/place.svg';
import iconPhone from '../public/images/phone.svg';
import iconMail from '../public/images/mail.svg';
import { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine =
    'h-1 w-10 my-1 rounded-full bg-black transition ease transform duration-300';

  const toggleBodyScroll = () => {
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      <button
        className='md:hidden flex flex-col h-12 w-12 rounded justify-center items-center group z-50'
        onClick={() => {
          setIsOpen(!isOpen);
          toggleBodyScroll();
        }}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'rotate-45 translate-y-3' : ''
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : ''}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? '-rotate-45 -translate-y-3' : ''
          }`}
        />
      </button>
      {isOpen && (
        <nav
          className='fixed p-16 right-0 top-0 
        w-[90%] sm:w-[80%] h-screen bg-white shadow z-40'
        >
          {/* Add navigation links here */}
          <nav
            className='flex h-full gap-14 flex-col 
          justify-center items-center'
          >
            <ul
              className='mt-auto flex flex-col items-center
            gap-6 text-2xl font-bold'
            >
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/listing'>Listing</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Contact Us</Link>
              </li>
            </ul>
            <div className='flex flex-col gap-4 mt-auto'>
              <div className='flex gap-2'>
                <Image src={iconPhone} alt='' />
                <a href='tel:+1234567890'>+123 456 7890</a>
              </div>
              <div className='flex gap-2'>
                <Image src={iconMail} alt='' />
                <a href='mailto:hello@realestate.com'>hello@realestate.com</a>
              </div>
            </div>
          </nav>
        </nav>
      )}
    </>
  );
};

export default BurgerMenu;
