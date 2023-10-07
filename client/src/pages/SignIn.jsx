import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'

const SignIn = () => {

  const [formData, setFormData] = useState({})
  const {isLoading, error} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // to update user inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart())
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if(data.success === false ) {
        dispatch(signInFailure(data.message))
        return; 
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
    
  }

  // styles
  const labelStyle = "block text-sm font-medium leading-6 text-gray-900"

  const headerStyle = "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"

  const inputStyle = "block w-full rounded-md py-2 px-3 border border-gray-300 text-gray-900 shadow-sm sm:text-sm sm:leading-6 outline-none"

  const submitBtn = "flex w-full justify-center rounded-md bg-navy-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-blue"


  return (
    <section>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <article className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className={headerStyle}>
            Sign In
          </h2>
        </article>

        <article className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
           className="space-y-6"
           action="#" 
           method="POST"
           onSubmit={handleSubmit}
          >
            <div>
              <label
               htmlFor="email" 
               className={labelStyle}>
                Email address
              </label>
              <div className="mt-2">
                <input 
                 required 
                 id="email" 
                 type="email" 
                 name="email" 
                 autoComplete="email"
                 onChange={handleChange}
                 className={inputStyle} 
                 />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                 htmlFor="password" 
                 className={labelStyle}>
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input 
                 required 
                 id="password" 
                 name="password" 
                 type="password" 
                 autoComplete="current-password" 
                 onChange={handleChange}
                 className={inputStyle} 
                 />
              </div>
            </div>

            <div>
              <button disabled={isLoading} type="submit" className={submitBtn}>
                {isLoading ? 'Loading...' : 'Sign In'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Dont have an account?
            <Link
             to='/sign-up' 
             className="ml-1 font-semibold leading-6 text-navy-blue hover:underline"
             >
              Sign Up
            </Link>
          </p>

        </article>
        {error && <p className='text-center text-red-500'>{error}</p>}
      </div>

    </section>
  )
}

export default SignIn
