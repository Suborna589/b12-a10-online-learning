
import React from 'react';
import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import SocialSignIn from '../../SocialSignIn/GoogleSignIn';
import { useState } from 'react';
import { LuEyeClosed } from 'react-icons/lu';
import { IoEyeSharp } from 'react-icons/io5';

const SignIn = () => {
    const[error,setError]=useState();
    const[show,setShow]=useState(false);

    const {signInUser}=use(AuthContext);
    const location =useLocation();
    const navigate = useNavigate(); 

    const handleSignIn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(form,email,password);

        signInUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            toast.success(" Login successfully!")
            navigate(`${location.state ? location.state : '/'}`)
        }).catch(error=>{
           const errorMessage = error.message;
            setError(errorMessage);
        })
    }
    return (
     <div className="hero bg-base-200 min-h-screen ">
  <Toaster position="top-center" />
    <div className="card  bg-gradient-to-r from-violet-200 to-pink-200 w-[500px] h-[550px] shrink-0 shadow-2xl">
              <h1 className="text-4xl font-bold text-white">Login</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <fieldset className="fieldset">
          <label className="label text-white text-base font-semibold   ">Email</label>
          <input type="email" className="input rounded-xl w-full h-14 border-3 border-purple-500 shadow-2xl" name="email" placeholder=" Your Email" />
          <label className="label text-white text-base font-semibold ">Password</label>
    
           <div className=' flex flex-col-reverse items-center relative '>
                    <input type={show ? "text" : "password"} className="input rounded-xl w-full h-14 border-3 border-purple-500 shadow-2xl" name="password" placeholder=" Your Password" required />
                    <button onClick={()=>setShow(!show)} className='absolute top-4 right-8  text-2xl cursor-pointer    '>{!show? <LuEyeClosed/> : <IoEyeSharp/>} </button>
                  </div>
          <div><a className="link link-hover text-white">Forgot password?</a></div>
           {
            error && <p className='text-xs text-red-500'>{error}</p>
          }
         
          <button type="submit" className="btn bg-gradient-to-r from-amber-500 to-pink-500 mt-4 rounded-xl w-full h-14 text-white text-lg ">Login</button>
           <p className='font-semibold text-center mt-5 '>Don't Have An Account ? <Link to={"/auth/signUp"} className='text-purple-800 text-base font-bold'>Sign Up</Link>  </p>
        </fieldset>
      </form>
      <SocialSignIn></SocialSignIn>
    </div>
  </div>

    );
};

export default SignIn;