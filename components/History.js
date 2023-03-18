/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import historyImg from '../public/images/aboutHistory.png';
import iconTick from '../public/images/tick.svg';

const History = () => {
  return (
    <section className='section'>
      <div className='grid max-w-7xl mx-auto gap-6 grid-cols-1 lg:grid-cols-2 sm:gap-10 lg:gap-20'>
        <Image
          src={historyImg}
          alt='image features'
          className='w-full max-h-[800px] object-cover rounded-2xl aspect-video lg:aspect-auto'
        />
        <div className='contnet order-last'>
          <div className='heading'>
            <h2 className='heading-3 mb-4'>Our History</h2>
            <p>
              Real Estate Bali began as a dream, uniting passion for property
              and love for the island's beauty, to offer seamless real estate
              solutions.
            </p>
          </div>
          <div className='flex flex-col gap-10 mt-10'>
            <div className='features items-center'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-0 justify-center'>
                <p>2010</p>
                <div className='heading-4 leading-tight'>
                  Create The Developer Team
                </div>
              </div>
            </div>
            <div className='features items-center'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-0 justify-center'>
                <p>2015</p>
                <div className='heading-4 leading-tight'>
                  Have a 2 Big Office
                </div>
              </div>
            </div>
            <div className='features items-center'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-0 justify-center'>
                <p>2019</p>
                <div className='heading-4 leading-tight'>
                  Have a 400+ Member Team Arround The World
                </div>
              </div>
            </div>
          </div>
          <p className='mt-16'>
            Starting with a small, dedicated group, our journey has led to an
            international presence, striving to serve our clients with
            exceptional service and an unwavering commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
