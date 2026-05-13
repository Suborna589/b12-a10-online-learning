import React, { useState } from 'react';
import SocialSignIn from '../../SocialSignIn/GoogleSignIn';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { LuEyeClosed } from 'react-icons/lu';
import { IoEyeSharp } from 'react-icons/io5';


const Register = () => {
  const{ createUser,setUser,updateUser} =use(AuthContext);
  const [passwordError,setPasswordError] = useState("");
const [show,setShow]=useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const  handleRegister = (e)=>{
    e.preventDefault()
    const form= e.target;
    const name= form.name.value;
    const photo= form.photo.value;
    const email= form.email.value;
    const password= form.password.value;

     if(password.length <6 ){
  setPasswordError("Passeword must be at least 6 characters long");
 
  return;
 }else if (!/[A-Z]/.test(password)) {
     setPasswordError( "Password must contain at least one uppercase letter");
    
      return ;
     
    }
   else if (!/[a-z]/.test(password)) {
   setPasswordError("Password must contain at least one lowercase letter");
  
      return;
    }else{
      setPasswordError( " ");
      
    

    }

    console.log(form,name,email,password,photo);

    createUser(email,password)
    .then(result=>{
      const user = result.user;
      updateUser({displayName: name, photoURL: photo})
      .then(()=>{
        setUser({...user,displayName: name, photoURL: photo})
         const newUser = {
          name,
          email,
          photo, 
          
          
        };

        fetch("http://localhost:5183/users",{

          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
         
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
       
      }).catch((error)=>{
        console.log(error);
        setUser(user);

       

      })
      
      toast.success(" SignUp successfully!")
      form.reset()
      navigate(`${location.state ? location.state : '/'}`)
    }).catch(error=>{
      const errorMessage = error.message;
      alert(errorMessage);

    })

  }


   

   
    return (
       <div className="hero bg-gradient-to-r from-slate-300 to-slate-500 min-h-screen">
    <Toaster position="top-right" />
    <div className="card bg-base-100 w-[550px]  h-[770px] shrink-0 shadow-2xl rounded-3xl">
        <h1 className="text-5xl font-bold text-blue-700">Sign Up</h1>
      <form onSubmit={handleRegister} className="card-body">
    
        <fieldset className="fieldset">
          <label className="label text-black text-base">Name</label>
          <input type="text" className="input rounded-full  w-full h-16 bg-sky-50 border-blue-400/30 shadow-xl " name='name' placeholder="Your Name" />
          <label className="label text-black text-base">Photo URL</label>
          <input type="photo" className="input rounded-full  w-full h-16 bg-sky-50 border-blue-400/30 shadow-xl " name='photo' placeholder="Photo url" />
          <label className="label text-black text-base">Email</label>
          <input type="email" className="input rounded-full  w-full h-16 bg-sky-50 border-blue-400/30 shadow-xl  " name='email' placeholder="Email" />
          <label className="label text-black text-base">Password</label>

            <div className='  items-center relative '>
            <input type={show ? "text" : "password"} className="input rounded-full   w-full h-16 bg-sky-50 border-blue-400/30 shadow-xl " name="password" placeholder="Password" required />
            <button onClick={()=>setShow(!show)} className='absolute top-5 right-10  text-2xl cursor-pointer      text-blue-700 '>{!show? <LuEyeClosed/> : <IoEyeSharp/>} </button>
          </div>
           {
            passwordError && <span className='text-base  text-orange-500'>{passwordError}</span>
            
          }
          <div><a className="link link-hover ">Forgot password?</a></div>
          <button type='submit' className="btn bg-gradient-to-r from-emerald-400 to-cyan-400 text-white text-lg mt-4  w-full h-14 rounded-full  border-0 shadow-xl ">Sign Up</button>

           <p className='font-semibold text-center pt-4 '>Already  Have An Account ? <Link to={"/auth/signIn"} className='text-purple-800 text-base font-bold'>Login</Link>  </p>


          
        </fieldset>

        <SocialSignIn></SocialSignIn>

        
      </form>
    </div>
  </div>

    );
};

export default Register;