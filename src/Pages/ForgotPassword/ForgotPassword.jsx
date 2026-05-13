import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";


const ForgotPassword = () => {
  const auth = getAuth();
  const location = useLocation();


  const [email, setEmail] = useState(location.state || "");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast("Please enter your email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
         toast.success("Reset email sent successfully!");

        
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
       console.log(error.message);
       toast.error("Failed to send reset email");
      });
  };

  return (
   <div>
  
     <div className="min-h-screen flex justify-center items-center bg-gray-100">
       
   <Toaster position="top-center" />

      <form
        className="bg-white p-6 rounded-2xl shadow-lg w-96 h-72"
        onSubmit={handleReset}
      >
        <h2 className="text-xl font-bold text-center mb-10 mt-5">
          Reset Password
        </h2>

    
        <input
          type="email"
          placeholder="Enter Your email"
          value={email}
          className="w-full p-2 border rounded mb-8"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Send Reset 
        </button>

      </form>

    </div>
   </div>
  );
};

export default ForgotPassword;