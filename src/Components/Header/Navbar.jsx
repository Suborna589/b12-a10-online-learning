import React, { use } from 'react';
import { Link } from 'react-router';
import learnLogo from "../../assets/learnLogo.png"
import { AuthContext } from '../../Context/AuthContext';
import userImg from "../../assets/useImg.jpeg";
import { LuLogOut } from "react-icons/lu";


const Navbar = () => { 
  const {user,logOut}=use(AuthContext)
  const handleLogOut= ()=>{
    logOut().then(()=>{
      alert("LogOut Successfull")

    }).catch(error=>{
      console.log(error)


    })
    
    
  }
    const links = 
    <> 
    <Link className='mr-5' to={'/'}>Home</Link>
    <Link className='mr-5' to="/courses">Courses</Link>
    <Link className='mr-5' to={'/dashboard'}>Dashboard</Link>
    </>
    return (
  <div> 
         <div className="navbar  relative bg-gradient-to-r from-purple-900/50 via-black/20 to-blue-900/40">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}


      </ul>
    </div>
    <a className=" text-xl flex items-center gap-2 text-[#000080] font-bold ">
       <img className='w-12 h-12 rounded-full' src={learnLogo} alt="" />
      Learniverse
     
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    
    </ul>
  </div>
  <div className="navbar-end gap-2  ">
    
     <div className="dropdown ">
      
      
      <div tabIndex={0} role="button" className="cursor-pointer">
        <img
          className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
          src={user ? user.photoURL : userImg}
          alt="user"
        />
      </div>


      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-40 p-2 shadow-lg"
      >
        <li>
          <Link to="/profile"> My Profile</Link>
        </li>

        <li>
          <Link to="/update-profile">Update Profile</Link>
        </li>

        <li>
          <button onClick={handleLogOut} className="text-red-500">
             Logout
          </button>
        </li>
      </ul>
    </div>
    {/* <img className='w-12 h-12 mr-3 rounded-full' src={`${user ? user.photoURL : userImg}`} alt=""  /> */}
    


    {
      user ? <button onClick={handleLogOut} className=' btn bg-gradient-to-r from-teal-400 to-yellow-200 '>LogOut <LuLogOut></LuLogOut></button>:    <div className='flex'> 
                      <Link to="/auth/signIn" className="btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mr-6">Login</Link>
                       <Link to={'/auth/signUp'} className="btn text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">SignUp</Link>
                    

      </div>
    }

  </div>

  
</div>  


  </div>




    );
};

export default Navbar;