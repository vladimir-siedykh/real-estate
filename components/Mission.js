import imgVision from '../public/images/vision.png';
import imgMission from '../public/images/mission.png';
import Image from 'next/image';

const Mission = () => {
  return (
    <section className='section bg-[#fafafa]'>
      <div className='grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20'>
        <div className='flex flex-col gap-5'>
          <Image
            src={imgVision}
            alt='Vision'
            className='w-full h-auto rounded-2xl lg:order-2 order-none'
          />
          <h3 className='heading-3'>Vision</h3>
          <p>
            We believe that everyone deserves to live in a space that is not
            only functional, but also truly special – a place that they can call
            their own and be proud of. To achieve this vision, we work closely
            with our clients to understand their needs and preferences, and we
            use the latest techniques and materials to create modern houses.
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <Image
            src={imgMission}
            alt='Mission'
            className='w-full h-auto rounded-2xl'
          />
          <h3 className='heading-3'>Mission</h3>
          <p>
            Our mission is to provide our clients with the best possible service
            and to create a space that they will love for years to come. We are
            committed to delivering the highest quality of workmanship and to
            using only the best materials. We are also committed to providing
            our clients with the best possible service and to creating a space
            that they will love for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
