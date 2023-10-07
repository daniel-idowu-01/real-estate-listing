import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignOut = () => {

  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

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
      setIsLoading(true)
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if(data.success === false ) {
        setIsLoading(false);
        setError(data.message);
        return; 
      }
      setIsLoading(false);
      setError(null);
      navigate('/sign-in')
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
            Create an account
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
                Username
              </label>
              <div className="mt-2">
                <input
                 required 
                 type="text" 
                 id="username" 
                 name="username" 
                 autoComplete="username"
                 onChange={handleChange}
                 className={inputStyle} 
                 />
              </div>
            </div>

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
                {isLoading ? 'Loading...' : 'Sign Up'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
           Have an account?
            <Link
             to='/sign-in' 
             className="ml-1 font-semibold leading-6 text-navy-blue hover:underline"
             >
              Log In
            </Link>
          </p>

        </article>
        {error && <p classNameName='text-red-500'>{error}</p>}
      </div>

    </section>
    
  )
}

export default SignOut
