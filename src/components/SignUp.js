import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";


const SignUp = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [logged, isLogged]=useState(false)
    const auth = getAuth();
   
      const handleEmail=(e)=>{
        e.preventDefault();
        setEmail(e.target.value)
      }
      const handlePassword=(e)=>{
        e.preventDefault();
        setPassword(e.target.value)
      }
      const handleSubmit=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });  
      }

  return (
    <div className='flex justify-center items-center flex-col h-screen w-screen'>
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <input onChange={handleEmail} className='border outline-none py-3 px-5 mb-5' name="email" type="email" placeholder=''  /> <br />
      <input onChange={handlePassword} className='border outline-none py-3 mb-5 px-5' name="password" type="password" placeholder=''  />  
      <button type="submit" onSubmit={handleSubmit} className='outline-none w-full bg-black mb-5 text-white py-2 font-medium' >SignUp</button>
    </form>
    <p>Already having an account <Link className='outline-none' to="/signin"><span className='underline underline-offset-4 text-lg font-medium' >SignIn</span></Link></p>
</div>
  )
}

export default SignUp