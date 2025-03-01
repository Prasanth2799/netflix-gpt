import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error")
});

  }
  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName, photoURL} = user;
            
            
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
            navigate('/browse')
            // ...
          } else {
            // User is signed out
            // ... 
            dispatch(removeUser())
            navigate("/")
          }
        });
        //unsubscribe when component unmounts
        return () => unsubscribe();
      },[])
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className="w-60" src={LOGO} alt='netflix-logo' />
        {user && <div className='flex items-center'>
          <img className='w-12 h-12 mx-1'  alt='user-logo' src='https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'/>
          <p className='text-white font-bold cursor-pointer mr-5' onClick={handleSignOut}>Sign Out</p>
      </div>}
    </div>
  )
}

export default Header