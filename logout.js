
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css'

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a request to backend to logout (invalidate session/token)
      await fetch("http://127.0.0.1:5000/logout", {
        method: "POST",
        
      });
      localStorage.removeItem('token'); 

      // Redirect to the login page after successful logout
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <main>
    <div className='logoutbutton'>
    
    <button onClick={handleLogout}>Logout</button>
    <p className='loggingout'>Waiting to Logout...</p>
    </div>
    </main>
  );
};

export default LogoutButton;
