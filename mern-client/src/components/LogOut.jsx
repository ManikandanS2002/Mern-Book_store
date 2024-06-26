import React, { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleLogout = () => {
        logOut().then(() => {
            alert("Successfully Signed Out")
            navigate(from,{replace:true})
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button className='bg-red-700 py-2 px-4 
      rounded text-white' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default LogOut
