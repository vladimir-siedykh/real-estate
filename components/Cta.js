/* eslint-disable react/no-unescaped-entities */
import imageMain from '../public/images/cta.png';
import img1 from '../public/images/cta-1.png';
import img2 from '../public/images/cta-2.png';
import img3 from '../public/images/cta-3.png';
import Image from 'next/image';

const Cta = () => {
  return (
    <section className='section'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid gap-4 sm:gap-6 md:gap-[56px] grid-cols-1 lg:grid-cols-2'>
          <Image
            src={imageMain}
            alt='House image'
            className='w-full h-auto rounded-2xl object-cover aspect-video lg:flex lg:aspect-auto'
          />
          <div className='flex flex-col'>
            <h2 className='heading-2 max-w-3xl'>
              Let's Move to Your Dream Family Home
            </h2>
            <p className='max-w-3xl mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='btn mt-6 max-w-[max-content]'>
              Get Quote Now
            </button>
            <div className='grid grid-cols-3 gap-4 mt-6'>
              <Image
                src={img1}
                alt='interier'
                className='w-full h-auto rounded-2xl'
              />
              <Image
                src={img2}
                alt='interier'
                className='w-full h-auto rounded-2xl'
              />
              <Image
                src={img3}
                alt='interier'
                className='w-full h-auto rounded-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
