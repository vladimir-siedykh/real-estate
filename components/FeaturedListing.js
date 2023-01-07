import Image from 'next/image';
import listing from '../constants/listing';
import iconPlace from '../public/images/place.svg'

/* eslint-disable react/no-unescaped-entities */
const FeaturedListing = () => {
  return (
    <section className='section'>
      <div className='max-w-7xl mx-auto '>
        <div className='flex flex-col gap-10 md:gap-20'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
            <h2 className='heading-3'>Featured Listing</h2>
            <p>Don't miss your chance to own this dream home</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {listing
              .filter((card) => card.featured === true)
              .map((card) => {
                return (
                  <div className='relative' key={card.id}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      className='w-full h-auto rounded-2xl'
                    />
                    <div className='card-body mt-4'>
                      <h3 className='heading-5'>{card.title}</h3>
                      <div className='flex items-center gap-2'>
                        <Image src={iconPlace} alt='' width={24} height={24} />
                        <p>
                          {card.address}, {card.country}
                        </p>
                      </div>
                    </div>
                    <p className='absolute top-4 left-4 text-white bg-[#222430] px-6 py-1 rounded-[80px]'>
                      {card.price}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className='flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between'>
            <p>Discover the perfect home for you</p>
            <button className='btn-transparent'>See More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;
