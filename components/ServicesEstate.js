import Image from 'next/image'
import serviceSecond from '../public/images/serviceSecond.png'
import check from '../public/images/icons/check.svg'

const ServicesEstate = () => {
  return (
    <section className='section'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28'>
        <div className='flex flex-col'>
          <h2 className='heading-3'>Real Estate Services</h2>
          <p className='mt-4 mb-10'>
            We provide comprehensive services for all your property needs,
            ensuring a seamless experience.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Property Solutions</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Interior Decorators</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Exterior Design</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Exterior Design</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Interior Design</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Marketing and Advertising</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Property Management</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Legal Services</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Financial Services</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Home Staging</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Moving and Relocation</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={check} alt='check' />
              <p>Home Inspection</p>
            </div>
          </div>
          <p className='mt-10'>
            Our team of dedicated professionals works closely with clients to
            understand their requirements, providing personalized solutions and
            exceptional service every step of the way. We are committed to
            making your property journey in Bali a rewarding and memorable
            experience.
          </p>
        </div>
        <Image
          src={serviceSecond}
          alt='services estate'
          className='w-full h-auto hidden lg:block'
        />
      </div>
    </section>
  );
}

export default ServicesEstate