import Image from 'next/image';
import serviceMain from '../public/images/serviceMain.png';

const ServicesFeatured = () => {
  return (
    <section className='section'>
      <div className='flex max-w-7xl mx-auto gap-10 md:gap-20 flex-col'>
        <Image
          src={serviceMain}
          alt='main pic services'
          className='w-full h-auto object-cover aspect-video lg:flex lg:aspect-auto rounded-2xl'
        />
        <div className='counter grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              1.
            </div>
            <div className='heading-4 mt-4 mb-2'>Residential Building</div>
            <p>
              Discover your perfect home in Bali, with our selection of
              exceptional houses, villas, and apartments.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              2.
            </div>
            <div className='heading-4 mt-4 mb-2'>Individual Building</div>
            <p>
              Find unique and personalized spaces tailored to your individual
              needs and preferences.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              3.
            </div>
            <div className='heading-4 mt-4 mb-2'>Corporate Building</div>
            <p>
              Secure the ideal location for your business with our range of
              professional office spaces.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              4.
            </div>
            <div className='heading-4 mt-4 mb-2'>Commercial Building</div>
            <p>
              Explore prime retail and commercial properties to elevate your
              business presence in Bali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatured;
