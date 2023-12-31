import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {

  const { currentUser } = useSelector(state => state.user)

  return (
    <header className='shadow-sm px-10 md:px-20'>

      <div className='flex justify-between items-center mx-auto py-6'>
        <Link to='/'>
            <h1
            className='font-bold text-navy-blue text-sm sm:text-xl flex flex-wrap'>
                <span className='opacity-80'>Ren</span>
                <span>Homes</span>
            </h1> 
        </Link>

        <form
         action=""
         className='rounded-lg p-2 px-4 border outline-none flex items-center' >
            <input
             type="text" 
             placeholder='Search...'
             className='outline-none w-24 sm:w-64'
             />
             <FaSearch />
        </form>

        <ul className='flex items-center gap-8'>
            <Link to='/' className='hidden sm:block hover:underline'>
                <li className='hover:cursor-pointer'>Home</li>
            </Link>

            <Link to='/about' className='hidden sm:block hover:underline'>
                <li>About</li>
            </Link>

            <Link to='/profile'>
              {currentUser
                ? 
                  <img className='w-10 h-10 rounded-full object-cover' src={currentUser.avatar} alt="profile" />
                :
                  
                  <li className='hover:underline'>Sign In</li>
                  
                }
            </Link>
        </ul>
      </div>

    </header>
  )
}

export default Header
