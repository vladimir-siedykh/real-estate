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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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