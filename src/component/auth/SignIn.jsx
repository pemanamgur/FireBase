import React, { useState } from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'

const SignIn = () => {

    // const auth = getAuth();
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


    }

  return (
    <div className='sign-in'>
      <h1>Login your app</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
         type="email"
         value={email}
         onChange={(e)=>{setEmail(e.target.value)}}
         />
        <label htmlFor="">Password</label>
        <input
         type="password"
         value={password}
         onChange={(e)=>{setPassword(e.target.value)}}
         />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default SignIn
