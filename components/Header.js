import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-4 px-4 sm:px-6'>
      <div className='flex justify-between items-center mx-auto max-w-7xl'>
        <h1 className='heading-5'>Real Estate</h1>
        <nav className='flex gap-6 items-center'>
          <ul className='flex gap-6'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Listing</Link>
            </li>
            <li>
              <Link href='/'>Blog</Link>
            </li>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/'>Contact Us</Link>
            </li>
          </ul>
          <button className='btn'>Get a quote</button>
        </nav>
      </div>
    </header>
  );
}

export default Header
