import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const SignOut = () => {

  // styles
  const labelStyle = "block text-sm font-medium leading-6 text-gray-900"

  const headerStyle = "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"

  const inputStyle = "block w-full rounded-md py-2 px-3 border border-gray-300 text-gray-900 shadow-sm sm:text-sm sm:leading-6 outline-none"

  const submitBtn = "flex w-full justify-center rounded-md bg-navy-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-blue"

  return (
    <section>
      <Header />
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <article class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class={headerStyle}>
            Create an account
          </h2>
        </article>

        <article class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
          <div>
              <label
               for="email" 
               class={labelStyle}>
                Username
              </label>
              <div class="mt-2">
                <input
                 required 
                 type="text" 
                 id="username" 
                 name="username" 
                 autocomplete="username" 
                 class={inputStyle} 
                 />
              </div>
            </div>

            <div>
              <label
               for="email" 
               class={labelStyle}>
                Email address
              </label>
              <div class="mt-2">
                <input 
                 required 
                 id="email" 
                 type="email" 
                 name="email" 
                 autocomplete="email" 
                 class={inputStyle} 
                 />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                 for="password" 
                 class={labelStyle}>
                  Password
                </label>
                
              </div>
              <div class="mt-2">
                <input 
                 required 
                 id="password" 
                 name="password" 
                 type="password" 
                 autocomplete="current-password" 
                 class={inputStyle} 
                 />
              </div>
            </div>

            <div>
              <button type="submit" class={submitBtn}>Sign Up</button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <Link
             to='/sign-up' 
             class="ml-1 font-semibold leading-6 text-navy-blue hover:underline"
             >
              Log In
            </Link>
          </p>

          {/* 

          <div class="text-sm">
            <a href="#" class="font-semibold text-navy-blue hover:underline">Forgot password?</a>
          </div>


          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a href="#" class="font-semibold leading-6 text-navy-blue hover:underline">Start a 14 day free trial</a>
          </p> */}
        </article>
      </div>
    </section>
    
  )
}

export default SignOut
