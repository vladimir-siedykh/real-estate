/* eslint-disable react/no-unescaped-entities */
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
              At Real Estate Bali, we offer a unique combination of expertise,
              personalized service, and a commitment to finding you your perfect
              home.
            </p>
          </div>
          <div className='flex flex-col gap-4 mt-10'>
            <div className='features'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-4 justify-center'>
                <div className='heading-4 leading-tight'>
                  Comfortable Home Design
                </div>
                <p>
                  Our properties are designed with comfort and functionality in
                  mind, ensuring that you can enjoy a stress-free and relaxed
                  living environment.
                </p>
              </div>
            </div>
            <div className='features'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-4 justify-center'>
                <div className='heading-4 leading-tight'>
                  Professional Developer
                </div>
                <p>
                  Our team of professional developers works tirelessly to bring
                  you the best properties on the market, combining quality
                  craftsmanship with modern design.
                </p>
              </div>
            </div>
            <div className='features'>
              <Image src={iconTick} alt='' />
              <div className='flex flex-col gap-4 justify-center'>
                <div className='heading-4 leading-tight'>Fast Response</div>
                <p>
                  We understand that time is of the essence when it comes to
                  finding a new home. That's why we always strive to provide
                  fast and efficient responses to all of your queries and
                  requests.
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