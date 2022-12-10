import Image from "next/image";
import imgFeatures from '../public/images/features.png'
import iconTick from '../public/images/tick.svg'

const Features = () => {
  return (
    <section className='section'>
      <div className='grid max-w-7xl mx-auto gap-6 grid-cols-1 lg:grid-cols-2 sm:gap-10 lg:gap-20'>
        <div className='contnet order-last'>
          <div className='heading'>
            <h2 className='heading-3 mb-4'>
              Why Choose Us for Your House Needs?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className='features'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-4 justify-center'>
                <h4 className='heading-4 leading-tight'>
                  Comfortable Home Design
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className='features'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-4 justify-center'>
                <h4 className='heading-4 leading-tight'>
                  Professional Developer
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className='features'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-4 justify-center'>
                <h4 className='heading-4 leading-tight'>Fast Response</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={imgFeatures}
          alt='image features'
          className='w-full h-auto rounded-2xl aspect-video lg:aspect-auto'
        />
      </div>
    </section>
  );
}

export default Features