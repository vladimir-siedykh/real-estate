/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import imgUser1 from '../public/images/user-1.jpg';
import imgUser2 from '../public/images/user-2.jpg';
import imgUser3 from '../public/images/user-3.jpg';
import imgUser4 from '../public/images/user-4.jpg';

const Testimonials = () => {
  const users = [
    {
      id: 1,
      title: 'Jane Smith',
      subtitle: 'Doctor',
      review:
        'Working with Real Estate Bali was a great experience. The team was helpful and made the process easy.',
      image: imgUser1,
    },
    {
      id: 2,
      title: 'Mike Wilson',
      subtitle: 'Lawyer',
      review:
        'I found my dream home thanks to Real Estate Bali. Their team is knowledgeable and always available to answer my questions.',
      image: imgUser2,
    },
    {
      id: 3,
      title: 'Sarah Johnson',
      subtitle: 'Engineer',
      review:
        'The team at Real Estate Bali went above and beyond to help me find the perfect property. I highly recommend them.',
      image: imgUser3,
    },
    {
      id: 4,
      title: 'Robert Brown',
      subtitle: 'Accountant',
      review:
        'I was hesitant to work with a real estate agent, but Real Estate Bali made the process easy and I am so happy with my new home.',
      image: imgUser4,
    },
  ];

  return (
    <section className='section'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col gap-4 sm:gap-10 md:gap-20'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
            <h2 className='heading-3'>What Says from Our Happy Customers</h2>
            <p className='max-w-xl'>
              At Real Estate Bali, customer satisfaction is our top priority.
              Here's what some of our happy customers have to say about their
              experience with us:
            </p>
          </div>
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
            {users.map((user) => {
              return (
                <div key={user.id} className='testimonial'>
                  <p>{user.review}</p>
                  <div className='grid grid-cols-[max-content_1fr] gap-4'>
                    <Image
                      src={user.image}
                      alt=''
                      width={56}
                      height={56}
                      className='rounded-full'
                    />
                    <div className='flex flex-col gap-2 justify-center leading-none'>
                      <div className='heading-6 leading-none'>{user.title}</div>
                      <p className='leading-none'>{user.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
