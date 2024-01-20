import React, { useState } from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'

const SignUp = () => {

    // const auth = getAuth();
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    console.log(error)
    // const errorMessage = error.message;
  });


    }

  return (
    <div className='sign-in'>
      <h1>Create an Account</h1>
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
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
