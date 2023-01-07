import Image from 'next/image';
import serviceMain from '../public/images/serviceMain.png';

const ServicesFeatured = () => {
  return (
    <section className='section'>
      <div className='flex max-w-7xl mx-auto gap-10 md:gap-20 flex-col'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          <h2 className='heading-3 max-w-xl'>Featured Services</h2>
          <p className='max-w-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='counter grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              1.
            </div>
            <div className='heading-4 mt-4 mb-2'>Residential Building</div>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              2.
            </div>
            <div className='heading-4 mt-4 mb-2'>Individual Building</div>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              3.
            </div>
            <div className='heading-4 mt-4 mb-2'>Corporate Building</div>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              4.
            </div>
            <div className='heading-4 mt-4 mb-2'>Commercial Building</div>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <Image
          src={serviceMain}
          alt='main pic services'
          className='w-full h-auto object-cover aspect-video lg:flex lg:aspect-auto rounded-2xl'
        />
      </div>
    </section>
  );
};

export default ServicesFeatured;
