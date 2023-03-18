/* eslint-disable react/no-unescaped-entities */
const Steps = () => {
  return (
    <section className='section'>
      <div className='flex max-w-7xl mx-auto gap-10 md:gap-20 flex-col'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          <h2 className='heading-3 max-w-xl'>
            Easy Step to Buy Property on Dhalem Real Estate
          </h2>
          <p className='max-w-xl'>
            Buying a property has never been easier, with Dhalem Real Estate's
            simple and straightforward process.
          </p>
        </div>
        <div className='counter grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              1.
            </div>
            <div className='heading-4 mt-4 mb-2'>View Listing</div>
            <p>
              Explore our extensive collection of properties, carefully curated
              to match your needs and preferences.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              2.
            </div>
            <div className='heading-4 mt-4 mb-2'>Contact Us</div>
            <p>
              Get in touch with our friendly and knowledgeable team to answer
              any questions or to schedule a viewing.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              3.
            </div>
            <div className='heading-4 mt-4 mb-2'>Request a Visit</div>
            <p>
              Arrange a visit to your preferred property and take the first step
              towards making it your own.
            </p>
          </div>
          <div className='count'>
            <div className='heading-5 flex items-center justify-center rounded-full w-14 h-14 bg-[#222430] text-white'>
              4.
            </div>
            <div className='heading-4 mt-4 mb-2'>Request a Visit</div>
            <p>
              Submit an offer and let us guide you through the next steps
              towards securing your dream property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps