/* eslint-disable react/no-unescaped-entities */
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
            Buying a home with us is simple. View listings, contact us, schedule
            a visit, and buy your dream home.
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
              At Real Estate Bali, our vision is to be the leading provider of
              high-quality and affordable homes for families in Bali. We believe
              that everyone deserves a comfortable and beautiful place to call
              home, and we're committed to making that a reality for all of our
              customers.
            </p>
          </div>
          <div>
            <h3 className='heading-4 mb-4'>Our Mission</h3>
            <p>
              Our mission is to make the process of buying a home as simple and
              stress-free as possible. We strive to provide exceptional customer
              service, unparalleled expertise, and the most comprehensive
              selection of properties in Bali. Our goal is to help families find
              their dream homes and to create lasting memories for generations
              to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMission