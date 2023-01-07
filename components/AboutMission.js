import Image from 'next/image';
import aboutImg from '../public/images/about.png'

const AboutMission = () => {
  return (
    <section className='section'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          <h2 className='heading-3 max-w-xl'>
            Easy Step to Buy Property on Dhalem Real Estate
          </h2>
          <p className='max-w-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Image
          src={aboutImg}
          alt='about'
          className='w-full h-auto mt-20 mb-20 object-cover rounded-2xl aspect-video lg:aspect-auto'
        />
        <div className='grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-2'>
          <div>
            <h3 className='heading-4 mb-4'>Our Vision</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h3 className='heading-4 mb-4'>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMission