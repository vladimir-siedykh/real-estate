import Image from 'next/image'
import about from '../public/images/about.png'
import Link from 'next/link'

const Page404 = () => {
  return (
    <>
      <section className='section'>
        <h1 className='heading-2 text-center'>Oops, Page not Found</h1>
        <Link href='/' className='btn block max-w-[max-content] mx-auto mt-4 '>back to home</Link>
        <div className='max-w-7xl mx-auto mt-20'>
          <Image src={about} alt='image' />
        </div>
      </section>
    </>
  );
}

export default Page404