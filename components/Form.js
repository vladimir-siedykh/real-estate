const Form = () => {
  return (
    <form>
      <div className='grid grid-cols-1 gap-4'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <div>
            <label htmlFor='name'>Your Name</label>
            <input
              class='w-full border-[1px] border-gray-500 px-6 py-4 rounded-2xl'
              type='text'
              placeholder='Your Full name'
            ></input>
          </div>
          <div>
            <label htmlFor='name'>Your Email</label>
            <input
              class='w-full border-[1px] border-gray-500 px-6 py-4 rounded-2xl'
              type='text'
              placeholder='mail@yourmail.com'
            ></input>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <div>
            <label htmlFor='name'>Phone Number</label>
            <input
              class='w-full border-[1px] border-gray-500 px-6 py-4 rounded-2xl'
              type='text'
              placeholder='+1 999 900 90 90'
            ></input>
          </div>
          <div>
            <label htmlFor='name'>Your Subject</label>
            <input
              class='w-full border-[1px] border-gray-500 px-6 py-4 rounded-2xl'
              type='text'
              placeholder='Question'
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor='name'>Your Message</label>
          <textarea
            class='w-full border-[1px] border-gray-500 px-6 py-4 rounded-2xl'
            type='text'
            placeholder='Ask your question'
          ></textarea>
        </div>
      </div>
      <button type="submit" className='btn mt-4'>Send Message</button>
    </form>
  );
}

export default Form