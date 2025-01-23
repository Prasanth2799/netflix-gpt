import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true)
  const handleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }
  console.log(isSignInForm)
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg' alt='homepage-image'/>
        </div>
        <form className='w-3/12 my-48 absolute mx-auto right-0 left-0 bg-black p-14 text-white bg-opacity-75 rounded-lg'>
            <h1 className='font-bold py-3 m-2'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {isSignInForm && <input type='text' placeholder='Full Name' className='m-2 p-2 w-full bg-gray-700'/>}
            <input type='text' placeholder='Email' className='m-2 p-2 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='m-2 p-2 w-full bg-gray-700'/>
            <button className='bg-red-700 w-full p-2 m-2 rounded'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='p-2 m-1 cursor-pointer' onClick={handleSignInForm}>{isSignInForm ? "New to Netflix? Signup now" : "Already existed User? Signin now"}</p>
        </form>
    </div>
  )
}

export default Login