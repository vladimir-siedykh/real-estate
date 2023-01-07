import Image from 'next/image';
import Link from 'next/link';
import iconPlace from '../public/images/icons/place.svg';
import iconBed from '../public/images/icons/bed.svg';
import iconBath from '../public/images/icons/bath.svg';
import iconSquare from '../public/images/icons/square.svg';

const ListingCard = ({ card }) => {
  return (
    <Link href={`/listing/${card.slug}`}>
      <div className='relative' key={card.id}>
        <Image
          src={card.image}
          alt={card.title}
          className='w-full h-auto rounded-2xl'
        />
        <div className='card-body mt-4'>
          <h3 className='heading-5'>{card.title}</h3>
          <div className='flex items-center gap-2'>
            <Image
              src={iconPlace}
              alt=''
              width={24}
              height={24}
              className='w-6 h-6'
            />
            <p>
              {card.address}, {card.country}
            </p>
          </div>
        </div>
        <p className='absolute top-4 left-4 text-white bg-[#222430] px-6 py-1 rounded-[80px]'>
          {card.price}
        </p>
        <div className='mt-4 bg-[#FAFAFA] rounded-2xl flex justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              src={iconSquare}
              alt=''
              width={24}
              height={24}
              className='w-6 h-6'
            />
            <p>{card.area} Sq Ft</p>
          </div>
          <div className='flex items-center gap-2'>
            <Image
              src={iconBed}
              alt=''
              width={24}
              height={24}
              className='w-6 h-6'
            />
            <p>{card.beds} Bedroom</p>
          </div>
          <div className='flex items-center gap-2'>

            <Image src={iconBath} alt='' width={24} height={24} className='w-6 h-6' />
            <p>{card.baths} Bathroom</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
