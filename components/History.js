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
          className='w-full h-auto object-cover rounded-2xl aspect-video lg:aspect-auto'
        />
        <div className='contnet order-last'>
          <div className='heading'>
            <h2 className='heading-3 mb-4'>Our History</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
