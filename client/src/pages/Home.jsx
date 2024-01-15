import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <section
        className='flex items-center px-10 md:px-20 py-10 md:py-20 gap-10'
      >
        <article className='w-[70%] flex flex-col gap-8'>
          <h2 className='text-3xl md:text-5xl leading-loose'>
            Find your next <span>perfect</span> place with ease
          </h2>
          <p className='w-[80%]'>
            RenHomes is the best place to find your next perfect place to live. We have a wide range of properties for you to choose from
          </p>
          <p className='flex items-center gap-1 text-blue-500'>
            Let's get started <FaArrowRight />
          </p>
        </article>

        <article className='w-[50%]'>
          
        </article>
      </section>

      <section>
        <img
          className='w-full h-[20%]'
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt=""
        />
      </section>
    </div>
  )
}

export default Home
