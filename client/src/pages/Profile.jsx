import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'

const Profile = () => {

  const fileRef = useRef(null)
  connst [fileRef, setFile] = useState(undefined )
  const { currentUser } = useSelector(state => state.user)

  const [formData, setFormData] = useState({})
  const {isLoading, error} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(file) {
      handleFileUpload(file)
    }
  }, [file])

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress))
    })
  }

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
  const headerStyle = "text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"

  const inputStyle = "block w-full mx-auto rounded-md py-2 px-3 border border-gray-300 text-gray-900 shadow-sm sm:text-sm sm:leading-6 outline-none"

  const submitBtn = "flex w-full mx-auto justify-center rounded-md bg-navy-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-blue"

  // firebase storage
  /* allow read;
     allow write: if
     request.resource.size < 2 * 1024 * 1024 &&
     request.resource.contentType.matches('image/.*') */

  return (
    <section className="flex min-h-full flex-col justify-center gap-10 px-6 py-12 lg:px-8">

      <article className="sm:mx-auto sm:max-w-sm">
        <h2 className={headerStyle}>
          Profile
        </h2>
      </article>

      <article className='w-[70%] sm:w-[30%] mx-auto'>
        <form
          className="space-y-6"
          action="#" 
          method="POST"
          onSubmit={handleSubmit}
        >
          <input onChange={() => setFile(e.target.files[0])} type="file" hidden ref={fileRef} accept='image/*' />
          <img 
          alt="profile"
          src={currentUser.avatar} 
          className='mx-auto rounded-full hover:cursor-pointer' 
          onClick={() => fileRef.current.click()} 
          />
          <div>
            <div className="mt-2">
              <input 
                required 
                id="username" 
                type="text" 
                name="username" 
                autoComplete="username"
                placeholder='Username'
                onChange={handleChange}
                className={inputStyle} 
                />
            </div>
          </div>

          <div>
            <div className="mt-2">
              <input 
                required 
                id="email" 
                type="email" 
                name="email" 
                autoComplete="email"
                placeholder='Email'
                onChange={handleChange}
                className={inputStyle} 
                />
            </div>
          </div>

          <div>
            <div className="mt-2">
              <input 
                required 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password"
                placeholder='Password' 
                onChange={handleChange}
                className={inputStyle} 
                />
            </div>
          </div>

          <div>
            <button disabled={isLoading} type="submit" className={submitBtn}>
              {isLoading ? 'Loading...' : 'Update'}
            </button>
          </div>
        </form>

        <div className='relative top-5 flex justify-between'>
          <span className=' text-red-500 cursor-pointer hover:underline'>
            Delete account
          </span>

          <span className=' text-red-500 cursor-pointer hover:underline'>
            Sign Out
          </span>
        </div>
      </article>
      
    </section>
  )
}

export default Profile
