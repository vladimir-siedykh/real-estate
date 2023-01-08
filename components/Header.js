import Link from 'next/link';
// import { useState } from 'react';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header className='py-4 px-4 sm:px-6'>
      <div className='flex justify-between items-center mx-auto max-w-7xl'>
        <h1 className='heading-4'>
          <Link href='/'>Real Estate</Link>
        </h1>
        <div className='flex gap-6'>
          <nav className='hidden md:flex gap-6 items-center'>
            <ul className='flex gap-6'>
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
          </nav>
          <Link href='/contact' className='hidden md:block btn'>Get a quote</Link>

          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
