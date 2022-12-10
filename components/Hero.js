/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import heroImg from '../public/images/hero.png';

const Hero = () => {
  return (
    <section className='section'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20'>
        <div className='flex flex-col'>
          <h1 className='heading-2 mb-4 font-Nunito'>
            Bring Your Family's Happiness to Your Dream House
          </h1>
          <p>
            We believe that your home should be more than just a place to live –
            it should be a reflection of your unique style and personality.
          </p>
          <form className='mt-10 mb-10'>
            <div className='flex items-center'>
              <input
                className='w-full border-[1px] border-gray-500 px-6 py-4 rounded-[2rem]'
                type='text'
                placeholder='Search'
              />
              <button className='btn ml-[-140px]' type='submit'>
                Search
              </button>
            </div>
          </form>
          <div className='flex flex-wrap gap-10'>
            <div>
              <span className='heading-4'>300+</span>
              <p>Awards Winnning</p>
            </div>
            <div>
              <span className='heading-4'>80+</span>
              <p>Property Ready</p>
            </div>
            <div>
              <span className='heading-4'>450+</span>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <Image
          src={heroImg}
          alt='Main Image House'
          className='rounded-2xl w-full h-auto'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
