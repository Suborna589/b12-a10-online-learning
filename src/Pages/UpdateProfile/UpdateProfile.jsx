import React, { use,} from "react";

import { useNavigate } from "react-router";

import { useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";

const UpdateProfile = () => {

const {user,setUser,updateUser}=use(AuthContext);
  const location =useLocation();
  const navigate = useNavigate();

 
const handleUpdate=(e)=>{ 
  e.preventDefault();
 const form=e.target;
 const name= form.name.value;
 const photo=form.photo.value;
 const email= form.email.value;
  

  updateUser({displayName:name, photoURL:photo, email:email}).then(()=>{
     setUser({...user,displayName:name, photoURL:photo,email:email});
    
     form.reset()
     navigate(`${location.state ? location.state : '/'}`)
      toast.success("Update Profile successfully!");
  }).catch((error) => {
    console.log(error);
    setUser(user);
  
});
 
  
     
  
  };

  return (
      <div className="flex justify-center  items-center bg-[url('https://i.ibb.co.com/q3XD6d1W/sinup-bg.jpg')] bg-cover min-h-screen bg-center">
        <Toaster position="top-center" />
    <div className="card bg-white/30 w-full   max-w-xl   shadow-2xl py-5">
    <h1 className='font-semibold text-2xl text-center text-white'>Update Profile</h1>
      <form onSubmit={handleUpdate} className="card-body">
        <fieldset className="fieldset ">
          <label className="label text-black text-base">Name</label>
          <input type="text" className="input w-full rounded-3xl py-8 " name='name' placeholder="Your name" required />
          <label className="label text-black text-base">Photo URL</label>
          <input type="url" className="input w-full rounded-3xl py-8 " name="photo" placeholder="Photo url" required />
          <label className="label text-black text-base">Email</label>
          <input type="email" className="input w-full rounded-3xl py-8 " name="email" placeholder="Email" required />
         
          
        
          <button type="submit" className="btn btn-neutral mt-4">Save Change</button>
         
          
        </fieldset>
      </form>
    </div>
  </div>
  );
};

export default UpdateProfile;