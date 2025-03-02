import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BACKGROUND_iMG } from '../utils/constants'

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true)
  const[showErrorMessage, setShowErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const dispatch = useDispatch()
  const handleSubmitForm = () => {
    const message = checkValidData(email.current.value, password.current.value)
    setShowErrorMessage(message)
    if(message) return

    if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        // Profile updated!
        // ...
      }).catch((error) => {
        setShowErrorMessage(error.message)
        // An error occurred
        // ...
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setShowErrorMessage(errorCode +" - "+errorMessage)
      // ..
    });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setShowErrorMessage(errorCode + " - " + errorMessage)
  });

    }
  }
  const handleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img className='h-screen w-screen object-cover' src={BACKGROUND_iMG} alt='background-image'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-3/12 my-48 absolute mx-auto right-0 left-0 bg-black p-14 text-white bg-opacity-75 rounded-lg'>
            <h1 className='font-bold py-3 m-2'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' ref={name}  placeholder='Full Name' className='m-2 p-2 w-full bg-gray-700'/>}
            <input ref={email} type='text' placeholder='Email' className='m-2 p-2 w-full bg-gray-700'/>
            <input ref={password} type='password' placeholder='Password' className='m-2 p-2 w-full bg-gray-700'/>
            <button className='bg-red-700 w-full p-2 m-2 rounded' onClick={handleSubmitForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='text-red-600 p-2 m-2'>{showErrorMessage}</p>
            <p className='p-2 m-1 cursor-pointer' onClick={handleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already existed User? Sign in now"}</p>
        </form>
    </div>
  )
}
export default Login