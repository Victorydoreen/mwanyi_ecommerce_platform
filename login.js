import React, { useState, useEffect } from 'react';
import './login.css';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (formData.password.length < 3) {
      newErrors.password = 'Password is too short.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const details = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      };

      try {
        const response = await fetch('http://127.0.0.1:5000/users/login', details);
        const data = await response.json();

        if (response.ok) {
          setSuccessMessage('Login successful.');
          setFormData({ email: '', password: '' });
          setErrors({});
          setUser(data.user);
          setIsLoggedIn(true);
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('isLoggedIn', true);
          toast.success('User successfully logged in');
        } else {
          console.error(`Server error: ${response.status} - ${data.message}`);
          setErrors({ server: `Server error: ${response.status} - ${data.message}` });
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrors({ server: 'An unexpected error occurred. Please try again.' });
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setUser({});
    setIsLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
  
    try {
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  
      if (parsedUser && typeof parsedUser === 'object') {
        setUser(parsedUser);
        setIsLoggedIn(true);
      } else {
        // Clear invalid user data from local storage
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        console.error('Invalid user data in localStorage:', parsedUser);
      }
    } catch (error) {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      console.error('Error parsing JSON:', error);
    }
  }, []);
  

  return (
    <div className='login-box'>
      <div className="login-form">
        <h2>Login</h2>
        {isLoggedIn && <Navigate to='/dashboard' replace={false} />}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='log'
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='log'
            />
            <p
              className="phs"
              onClick={toggleShowPassword}
              style={{ cursor: 'pointer' }}
            >
             
            </p>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
      
          <div className="center-content">
            <p className='noaccount'>
              Don't have an account?{' '}
              <Link to="/signup">
                <span className='sn'>Sign Up</span>
              </Link>
            </p>
            <button type="submit">Login</button>
          </div>
          {errors.server && <p className="error-message">{errors.server}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;

