// // Import necessary libraries and components
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { user_types } from './constants'; // Assuming user_types are imported from a file
// import './signup.css';


// // Signup component definition
//  const Signup = () => {
//   // Array of districts for the dropdown menu
//   const districts = [
//     "Abim", "Adjumani", "Agago", "Alebtong", "Amolatar", "Amudat", "Amuria", "Amuru",
//     "Apac", "Arua", "Budaka", "Bududa", "Bugiri", "Buhweju", "Buikwe", "Bulambuli", "Buliisa",
//     "Bundibugyo", "Bunyangabu", "Bushenyi", "Busia", "Butaleja", "Butebo", "Buikwe", "Buyende",
//     "Dokolo", "Gomba", "Gulu", "Hoima", "Ibanda", "Iganga", "Isingiro", "Jinja", "Kaabong",
//     "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kaliro", "Kalungu", "Kampala", "Kamuli",
//     "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga",
//     "Kiruhura", "Kisoro", "Kitgum", "Koboko", "Kole", "Kotido", "Kumi", "Kyankwanzi", "Kyegegwa",
//     "Kyenjojo", "Kyotera", "Lamwo", "Lira", "Luuka", "Luwero", "Lwengo", "Lyantonde", "Manafwa",
//     "Maracha", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Mitooma", "Mityana", "Moroto",
//     "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakaseke", "Nakasongola", "Namayingo",
//     "Namisindwa", "Namutumba", "Napak", "Nebbi", "Ngora", "Ntoroko", "Ntungamo", "Nwoya", "Obongi",
//     "Oyam", "Pader", "Pakwach", "Pallisa", "Pampala", "Rakai", "Rubanda", "Rubirizi", "Rukiga",
//     "Rukungiri", "Rwampara", "Sembabule", "Serere", "Sheema", "Sironko", "Soroti", "Tororo", "Wakiso",
//     "Yumbe", "Zombo"
//   ];

//   // State to manage form data
  

//     const first_name = '';
//     const last_name = '';
//     const nick_name = '';
//     const business_name = '';
//     const email = '';
//     const contact = '';
//     const password = '';
//     const user_type = '';
//     const quantity = '';
//     const price = '';
//     const region = '';
//     const district='';


//     const [formData, setFormData] = useState({
//     first_name,
//     last_name,
//     nick_name,
//     business_name,
//     email,
//     contact,
//     password,
//     user_type,
//     quantity,
//     price,
//     region,
//     district,
//   });


//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // // Toggle password visibility
//   // const toggleShowPassword = () => {
//   //   setShowPassword(!showPassword);
//   // };

//   // Validate form fields
//   const validateForm = () => {
//     const newErrors = {};

//     // Validation rules for each form field
//     if (formData.first_name.length < 4 || formData.first_name.length > 24) {
//       newErrors.first_name = 'First name must be between 4 and 24 characters.';
//     }

//     if (formData.last_name.length < 4 || formData.last_name.length > 24) {
//       newErrors.last_name = 'Last name must be between 4 and 24 characters.';
//     }

//     if (formData.nick_name.length < 4 || formData.nick_name.length > 24) {
//       newErrors.nick_name = 'Nick name must be between 4 and 24 characters.';
//     }

//     if (formData.business_name.length < 4 || formData.business_name.length > 24) {
//       newErrors.business_name = 'Business name must be between 4 and 24 characters.';
//     }

//     if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
//       newErrors.email = 'Invalid email address.';
//     }

//     if (formData.password.length < 8 || formData.password.length > 24) {
//       newErrors.password = 'Password must be between 8 and 24 characters.';
//     }

//     if (formData.user_type === '') {
//       newErrors.user_type = 'Please select a user type.';
//     }

//     // Validate quantity for farmers
//     if (formData.user_type === 'farmer' && formData.quantity === '') {
//       newErrors.quantity = 'Please enter the quantity.';
//     }

//     // Validate price for buyers
//     if (formData.user_type === 'buyer' && formData.price === '') {
//       newErrors.price = 'Please enter the price.';
//     }

//     if (formData.region === '') {
//       newErrors.region = 'Please select a region.';
//     }

//     if (formData.district === '') {
//       newErrors.district = 'Please select a district.';
//     }

//     setErrors(newErrors);

//     // Return true if there are no errors
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       try {
//         // Send a POST request to the server with form data
//         const details = {
//           method:"POST",
//           headers:{
//             'Content-Type':"application/json",
//             'Accept':'application/json'
//           },
//           body: JSON.stringify(formData)
//         }
//         fetch("http://127.0.0.1:5000/users/create", details)
//         .then((response)=>response.json())
//         .then((data)=>{
//           if (data.message){
//             alert(data.message);
//           }
//         })
        
//       } catch (error) {
//         // Handle errors from the server response
//         if (error.response) {
//           setErrors({ ...errors, server: error.response.data.message });
//         } else {
//           setErrors({ ...errors, server: 'An error occurred while registering.' });
//         }
//       }
//     }
//   };

//     function RegisterUser(){
//         // Send a POST request to the server with form data
//         const details = {
//           method:"POST",
//           headers:{
//             'Content-Type':"application/json",
//             'Accept':'application/json'
//           },
//           body: JSON.stringify(formData)
//         }
//         fetch("http://127.0.0.1:5000/users/create", details)
//         .then((response)=>response.json())
//         .then((data)=>{
//           if (data.message){
//             alert(data.message);
//           }})
//     }
//     const [errors, setErrors] = useState({});
//     const response = "";

//     // function handleSubmit(e){
//     //     e.preventDefault();
//     //     RegisterUser();
//     // }

//   // Render the Signup component
//   return (
//     <div className='login_box'>
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         {/* {successMessage && <p className="success-message">{successMessage}</p>} */}
//         <form onSubmit={(e)=>handleSubmit(e)}>
//           {/* Input fields for user information */}
//           <div className="form-group">
//             <label>First Name</label>
//             <input
//               type="text"
//               name="first_name"
//               value={formData.first_name}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.first_name && <p className="error-message">{errors.first_name}</p>} */}
//           </div>

//           <div className="form-group">
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="last_name"
//               value={formData.last_name}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.lastName && <p className="error-message">{errors.lastName}</p>} */}
//           </div>

//           <div className="form-group">
//             <label>Nick Name</label>
//             <input
//               type="text"
//               name="nick_name"
//               value={formData.nick_name}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.nick_name && <p className="error-message">{errors.nick_name}</p>} */}
//           </div>

//           <div className="form-group">
//             <label>Business Name</label>
//             <input
//               type="text"
//               name="business_name"
//               value={formData.business_name}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.business_name && <p className="error-message">{errors.business_name}</p>} */}
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.email && <p className="error-message">{errors.email}</p>} */}
//           </div>

//           <div className="form-group">
//             <label>Contact</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.contact && <p className="error-message">{errors.contact}</p>} */}
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type={ 'password'}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.password && <p className="error-message">{errors.password}</p>} */}
//           </div>

//           {/* User type selection (Farmer or Buyer) */}
//           <div className="form-group">
//             <label>User type</label>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   name="user_type"
//                   value="farmer"
//                   onChange={handleChange}
//                   className='radio'
//                 />
//                 Farmer
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="user_type"
//                   value="buyer"
//                   onChange={handleChange}
//                   className='radio'
//                 />
//                 Buyer
//               </label>
//             </div>
//             {/* {errors.user_type && <p className="error-message">{errors.user_type}</p>} */}
//           </div>

//           {/* Quantity field for farmers */}
//           {formData.user_type === 'farmer' && <div className="form-group">
//             <label>Quantity(kgs)</label>
//             <input
//               type="text"
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.quantity && <p className="error-message">{errors.quantity}</p>} */}
//           </div>}

//           {/* Price field for buyers */}
//           {formData.user_type === 'buyer' && <div className="form-group">
//             <label>Price(shs)</label>
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {/* {errors.price && <p className="error-message">{errors.price}</p>} */}
//           </div>}

//         {/* region field */}
//           <div className="form-group">
//             <label>Region</label>
//             <select
//               name="region"
//               value={formData.region}
//               onChange={handleChange}
//               className="input-field"
//             >
//               <option value="">Select Region</option>
//               <option value="central">Central</option>
//               <option value="eastern">Eastern</option>
//               <option value="western">Western</option>
//               <option value="northern">Northern</option>
//             </select>
//             {/* {errors.region && <p className="error-message">{errors.region}</p>} */}
//           </div>

//           <div className="form-group">
//             <label>District</label>
//             <select
//               name="district"
//               value={formData.district}
//               onChange={handleChange}
//               className="input-field"
//             >
//               <option value="">Select District</option>
//               {districts.map((district, index) => (
//                 <option key={index} value={district}>
//                   {district}
//                 </option>
//               ))}
//             </select>
//             {/* {errors.district && <p className="error-message">{errors.district}</p>} */}
//           </div>

//           {/* Submit button */}
//           <button className='sb' type="submit"><Link to="/login"><span className='sign'>Signup</span></Link></button>

//           {/* Display server error message, if any */}
//           {/* {errors.server && <p className="error-message">{errors.server}</p>} */}
//           <p className=''>
//           Already have an account? <Link to="/login"><span className='sign'>Login</span></Link>
//         </p>
//         </form>
//       </div>
//     </div>
//   );
// };


// // Export the Signup component
// export default Signup;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { user_types } from './constants'; // Assuming user_types are imported from a file
import './signup.css';

// Signup component definition
const Signup = () => {
  const navigate = useNavigate();

  const districts = [
    "Abim", "Adjumani", "Agago", "Alebtong", "Amolatar", "Amudat", "Amuria", "Amuru",
    "Apac", "Arua", "Budaka", "Bududa", "Bugiri", "Buhweju", "Buikwe", "Bulambuli", "Buliisa",
    "Bundibugyo", "Bunyangabu", "Bushenyi", "Busia", "Butaleja", "Butebo", "Buikwe", "Buyende",
    "Dokolo", "Gomba", "Gulu", "Hoima", "Ibanda", "Iganga", "Isingiro", "Jinja", "Kaabong",
    "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kaliro", "Kalungu", "Kampala", "Kamuli",
    "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga",
    "Kiruhura", "Kisoro", "Kitgum", "Koboko", "Kole", "Kotido", "Kumi", "Kyankwanzi", "Kyegegwa",
    "Kyenjojo", "Kyotera", "Lamwo", "Lira", "Luuka", "Luwero", "Lwengo", "Lyantonde", "Manafwa",
    "Maracha", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Mitooma", "Mityana", "Moroto",
    "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakaseke", "Nakasongola", "Namayingo",
    "Namisindwa", "Namutumba", "Napak", "Nebbi", "Ngora", "Ntoroko", "Ntungamo", "Nwoya", "Obongi",
    "Oyam", "Pader", "Pakwach", "Pallisa", "Pampala", "Rakai", "Rubanda", "Rubirizi", "Rukiga",
    "Rukungiri", "Rwampara", "Sembabule", "Serere", "Sheema", "Sironko", "Soroti", "Tororo", "Wakiso",
    "Yumbe", "Zombo"
  ];

  // State to manage form data
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    nick_name: '',
    business_name: '',
    email: '',
    contact: '',
    password: '',
    user_type: '',
    quantity: '',
    price: '',
    region: '',
    district: '',
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Validation rules for each form field
    if (formData.first_name.length < 4 || formData.first_name.length > 24) {
      newErrors.first_name = 'First name must be between 4 and 24 characters.';
    }

    if (formData.last_name.length < 4 || formData.last_name.length > 24) {
      newErrors.last_name = 'Last name must be between 4 and 24 characters.';
    }

    if (formData.nick_name.length < 4 || formData.nick_name.length > 24) {
            newErrors.nick_name = 'Nick name must be between 4 and 24 characters.';
          }
      
          if (formData.business_name.length < 4 || formData.business_name.length > 24) {
            newErrors.business_name = 'Business name must be between 4 and 24 characters.';
          }
      
          if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
            newErrors.email = 'Invalid email address.';
          }
      
          if (formData.password.length < 8 || formData.password.length > 24) {
            newErrors.password = 'Password must be between 8 and 24 characters.';
          }
      
          if (formData.user_type === '') {
            newErrors.user_type = 'Please select a user type.';
          }
      
          // Validate quantity for farmers
          if (formData.user_type === 'farmer' && formData.quantity === '') {
            newErrors.quantity = 'Please enter the quantity.';
          }
      
          // Validate price for buyers
          if (formData.user_type === 'buyer' && formData.price === '') {
            newErrors.price = 'Please enter the price.';
          }
      
          if (formData.region === '') {
            newErrors.region = 'Please select a region.';
          }
      
          if (formData.district === '') {
            newErrors.district = 'Please select a district.';
          }
      

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await RegisterUser();

        if (response.message) {
          // Registration successful
          alert(response.message);
          // Redirect to the dashboard
          navigate('/dashboard');
        }
      } catch (error) {
        // Handle errors from the server response
        if (error.response) {
          setErrors({ ...errors, server: error.response.data.message });
        } else {
          setErrors({ ...errors, server: 'An error occurred while registering.' });
        }
      }
    }
  };

  // Function to register user
  const RegisterUser = async () => {
    try {
      const details = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      };

      const response = await fetch('http://127.0.0.1:5000/users/create', details);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Error during user registration:', error);
      throw error;
    }
  };

  // Render the Signup component
  return (
    <main>
    <div className='login_box'>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className='spage'>
          {/* Input fields for user information */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="input-field"
            />
            {errors.first_name && <p className="error-message">{errors.first_name}</p>}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="input-field"
            />
            {errors.last_name && <p className="error-message">{errors.last_name}</p>}
          </div>

          <div className="form-group">
            <label>Nick Name</label>
            <input
              type="text"
              name="nick_name"
              value={formData.nick_name}
              onChange={handleChange}
              className="input-field"
            />
            {errors.nick_name && <p className="error-message">{errors.nick_name}</p>}
          </div>

          <div className="form-group">
            <label>Business Name</label>
            <input
              type="text"
              name="business_name"
              value={formData.business_name}
              onChange={handleChange}
              className="input-field"
            />
            {errors.business_name && <p className="error-message">{errors.business_name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="input-field"
            />
            {errors.contact && <p className="error-message">{errors.contact}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type={ 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          {/* User type selection (Farmer or Buyer) */}
          <div className="form-group">
            <label>User type</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="user_type"
                  value="farmer"
                  onChange={handleChange}
                  className='radio'
                />
                Farmer
              </label>
              <label>
                <input
                  type="radio"
                  name="user_type"
                  value="buyer"
                  onChange={handleChange}
                  className='radio'
                />
                Buyer
              </label>
            </div>
            {errors.user_type && <p className="error-message">{errors.user_type}</p>}
          </div>

          {/* Quantity field for farmers */}
          {formData.user_type === 'farmer' && <div className="form-group">
            <label>Quantity(kgs)</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="input-field"
            />
            {errors.quantity && <p className="error-message">{errors.quantity}</p>}
          </div>}

          {/* Price field for buyers */}
          {formData.user_type === 'buyer' && <div className="form-group">
            <label>Price(shs)</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="input-field"
            />
            {errors.price && <p className="error-message">{errors.price}</p>}
          </div>}

        {/* region field */}
          <div className="form-group">
            <label>Region</label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select Region</option>
              <option value="central">Central</option>
              <option value="eastern">Eastern</option>
              <option value="western">Western</option>
              <option value="northern">Northern</option>
            </select>
            {errors.region && <p className="error-message">{errors.region}</p>}
          </div>

          <div className="form-group">
            <label>District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && <p className="error-message">{errors.district}</p>}
          </div>

          {/* Submit button */}
          <button className='sb' type="submit">
            <span className='sign'>Signup</span>
          </button>

          {/* Display server error message, if any */}
          {errors.server && <p className="error-message">{errors.server}</p>}

          <p className='signwords'>
            Already have an account? <Link to="/login"><span className='sn'>Login</span></Link>
          </p>
        </form>
      </div>
    </div>
    </main>
  );
};

// Export the Signup component
export default Signup;
