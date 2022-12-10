import Image from 'next/image';
import imgUser1 from '../public/images/user-1.jpg';
import imgUser2 from '../public/images/user-2.jpg';
import imgUser3 from '../public/images/user-3.jpg';
import imgUser4 from '../public/images/user-4.jpg';

const Testimonials = () => {
  const users = [
    {
      id: 1,
      title: 'Shoo Phar Mhan',
      subtitle: 'Kang Masak',
      review:
        'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed doeiusmod tempor incididunt ut labore.',
      image: imgUser1,
    },
    {
      id: 2,
      title: 'Shoo Phar Dhie',
      subtitle: 'Kang Bakso',
      review:
        'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed doeiusmod tempor incididunt ut labore.',
      image: imgUser2,
    },
    {
      id: 3,
      title: 'Shoo Yha Thi',
      subtitle: 'Kang Ngomel',
      review:
        'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed doeiusmod tempor incididunt ut labore.',
      image: imgUser3,
    },
    {
      id: 4,
      title: 'Shoo Mhar Nhi',
      subtitle: 'Kang Gombal',
      review:
        'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed doeiusmod tempor incididunt ut labore.',
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
            {users.map(user => {
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
                      <h6 className='heading-6 leading-none'>{user.title}</h6>
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
