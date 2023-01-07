import ListingCard from './ListingCard';
import listing from '../listing/listing';

const Listing = () => {
  return (
    <section className='section'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {listing.map((card) => (
            <ListingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listing;
