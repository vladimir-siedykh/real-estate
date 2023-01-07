const Heading = ({title, subtitle}) => {
  return (
    <section className='section '>
      <div className='max-w-7xl mx-auto text-center flex flex-col items-center'>
        <h1 className='heading-1'>{title}</h1>
        <p className='mt-4 max-w-xl'>{subtitle}</p>
      </div>
    </section>
  );
}

export default Heading;