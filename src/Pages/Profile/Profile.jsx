import React from 'react';

import { use } from 'react';
import userImg from '../../assets/useImg.jpeg'
import { FaHeadset, FaLock, FaShieldAlt, FaUserEdit } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import { AuthContext } from '../../Context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div className='max-w-8xl mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <div className=' justify-center my-20'>
           
                <h1 className='text-2xl font-medium text-center'>My Profile</h1>
                <p className='text-base text-gray-500 my-4 text-center'>Manage your personal information and account settings</p>

                <div className='flex justify-center my-20'> 
                 <div className="card w-120 h-130 bg-base-100 card-xl shadow-sm">
                <div className="card-body ">
                <img className='w-24 flex  rounded-full h-24 ml-40' src={`${user ? user.photoURL : userImg}`} />
                <h2 className=" text-xl font-medium text-center">{user ? user.displayName : "User Name "}</h2>
                <div className='ml-32'><p className="bg-green-100 text-green-600 w-38 h-10 pt-2 pl-5  rounded-full text-sm">Verified Member</p></div>
                <div className='flex items-center gap-6 border-b pb-5 text-gray-300'>
                  <div className='bg-purple-300/30  pl-3 pt-2 rounded-xl  w-9 h-9 '>  <FaUserEdit className='text-purple-500 text-xl '></FaUserEdit></div>
                    <div>
                        <span className='text-gray-500 '>FullName</span>
                        <p className='text-gray-700 '>{user ? user.displayName : " "}</p>
                        </div>
                </div>

                <div className='flex items-center gap-6 border-b text-gray-300 pb-5 pt-4'>
                    <MdEmail className=' text-blue-500 bg-blue-300/30  pl-2 pr-2 rounded-xl  w-9 h-9  '></MdEmail>
                    <div>
                        <span className='text-gray-500  '>Email Address</span>
                        <p className='text-gray-700 '>{user ? user.email : ""}</p>
                        </div>
                </div>
                <div className="justify-center card-actions pt-2">
                
                 <Link  to='/update-profile' className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition"><FaUserEdit /> Update Profile</Link>
              </div>
            </div>
          </div>
                    

                </div>
            </div> 

            <div className='grid grid-cols-3 mt-12 mb-12 card  h-96 bg-blue-200/20 card-xl shadow-lg rounded-xl max-w-7xl mx-auto gap-5 '>

                <div className='flex items-center justify-center gap-8'>
                    <div><FaShieldAlt className="text-purple-500  bg-purple-500/20 w-14 h-10 p-2 rounded-2xl" /></div>
                     <div>
                        <h1 className='text-lg font-semibold'> Secure Account</h1>
                        <p className='text-base pt-2 text-gray-500 '>Your data is protected <br /> with encryption</p>
                     </div>
                    
                </div> 

                  <div className='flex items-center justify-center gap-8'>
                    <div><FaLock className="text-green-500  bg-green-500/20 w-14 h-10 p-2 rounded-2xl" /></div>
                     <div className=''>
                        <h1 className='text-lg font-semibold'> Privacy First</h1>
                        <p className='text-base pt-2 text-gray-500 '> We never share your <br /> personal info</p>
                     </div>
                    
                </div> 

                 <div className='flex items-center justify-center gap-8'>
                    <div><FaHeadset className="text-blue-500  bg-blue-500/20 w-14 h-10 p-2 rounded-2xl" /></div>
                     <div>
                        <h1 className='text-lg font-semibold'> 24/7 Support</h1>
                        <p className='text-base pt-2 text-gray-500 '>Get help anytime you <br /> need</p>
                     </div>
                    
                </div> 





            </div>
            
        </div>
    );
};

export default Profile;