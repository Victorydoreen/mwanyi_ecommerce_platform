// import linkedinIcon from "../images/linkedin.png";
// import twitterIcon from "../images/twitter.jpg";
// import githubIcon from "../images/github.png";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./layout.css";
// import logo from "../images/our_logo.png"; // Import the logo image
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// const Layout = ({ children }) => {
//   const [isCoffeeInfoDropdownOpen, setCoffeeInfoDropdownOpen] = useState(false);

//   const toggleCoffeeInfoDropdown = () => {
//     setCoffeeInfoDropdownOpen(!isCoffeeInfoDropdownOpen);
//   };

//   const isUserLoggedIn = localStorage.getItem('isLoggedIn');
//   let loggedInUser = null;

// if (isUserLoggedIn) {
//   const storedUser = localStorage.getItem('user');

//   try {
//     // Check if storedUser is a valid JSON string
//     const parsedUser = JSON.parse(storedUser);
    
//     if (parsedUser && typeof parsedUser === 'object') {
//       loggedInUser = parsedUser;
//     } else {
//       console.error('Invalid user data in localStorage:', parsedUser);
//     }
//   } catch (error) {
//     console.error('Error parsing JSON:', error);
//   }
// }

//   return (
//     <div className="app-container">
//       <header>
//         <nav>
//           <div className="logo-container">
//             <img src={logo} alt="Your Logo" className="logo" />
//           </div>
//           <Link to="/">Home</Link>
//           <Link to="/about">About us</Link>
//           <div
//             className="coffee-info-dropdown"
//             onMouseEnter={toggleCoffeeInfoDropdown}
//             onMouseLeave={toggleCoffeeInfoDropdown}
//           >
//             <span>Coffee Info</span>
//             <div
//               className={`dropdown-content ${isCoffeeInfoDropdownOpen ? "open" : ""
//                 }`}
//             >
//               <Link to="/marketprices">Market Prices</Link>
//               <Link to="/soil">Soil</Link>
//               <Link to="/farmingmethods">Farming Methods</Link>
//             </div>
//             {isCoffeeInfoDropdownOpen && (
//               <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
//             )}
//           </div>
//           {isUserLoggedIn && loggedInUser ? (
//             <>
//               <Link className="dashb" to="/dashboard">
//                 Dashboard
//               </Link>
//               <div>
//                 <span>{loggedInUser.first_name} ({loggedInUser.user_type})</span>
//                 <button onClick={() => localStorage.clear()}>Logout</button>
//               </div>
//             </>
//           ) : (
//             <div className="auth">
//               <button className="authl">
//                 <Link className="ll" to="/login">
//                   Login
//                 </Link>
//               </button>
//               <button className="auths">
//                 <Link className="ls" to="/signup">
//                   Signup
//                 </Link>
//               </button>
//             </div>
//           )}
//           {/* Add more navigation links as needed */}
//         </nav>
//       </header>
//       <main className="content">{children}</main>
//       <footer>
//        <div className="foot">
//     <div className="f1">
//       <img src={logo} alt="Your Logo" className="logof" />
//     </div>
//     <div className="f2">
//       <h3>What we do</h3>
//       <p>Direct Connection</p>
//       <p>Education and Training</p>
//       <p>Community Building</p>
//       <p>Quality Assurance</p>
//     </div>
//     <div className="f2">
//       <h3>Focus Areas</h3>
//       <p>Coffee Market Support</p>
//       <p>Social Interaction</p>
//       <p>Product Showcase</p>
//       <p>Affordable coffee</p>
//     </div>
//     <div className="social-icons">
//       <div>
//         <h4>Follow us</h4>
//       </div>
//       <div className="icons">
//         <a
//           className="linkedin"
//           href="https://www.linkedin.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={linkedinIcon} alt="LinkedIn" />
//           <br />
//         </a>
//         <a
//           className="twitter"
//           href="https://twitter.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={twitterIcon} alt="Twitter" />
//           <br />
//         </a>
//         <a
//           className="github"
//           href="https://github.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={githubIcon} alt="GitHub" />
//           <br />
//         </a>
//       </div>
//     </div>
//   </div>
//   <div className="copy">&copy; 2023 Mwanyi Ecommerce Platform</div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;



import linkedinIcon from "../images/linkedin.png";
import twitterIcon from "../images/twitter.jpg";
import githubIcon from "../images/github.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layout.css";
import logo from "../images/our_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "./logout";

const Layout = ({ children }) => {
  const [isCoffeeInfoDropdownOpen, setCoffeeInfoDropdownOpen] = useState(false);

  const toggleCoffeeInfoDropdown = () => {
    setCoffeeInfoDropdownOpen(!isCoffeeInfoDropdownOpen);
  };

  const isUserLoggedIn = localStorage.getItem('isLoggedIn');
  let loggedInUser = null;

  if (isUserLoggedIn) {
    const storedUser = localStorage.getItem('user');

    try {
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser && typeof parsedUser === 'object') {
        loggedInUser = parsedUser;
      } else {
        console.error('Invalid user data in localStorage:', parsedUser);
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }

  return (
    <div className="app-container">
      <header>
        <nav>
          <div className="logo-container">
            <img src={logo} alt="Your Logo" className="logo" />
          </div>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <div
            className="coffee-info-dropdown"
            onMouseEnter={toggleCoffeeInfoDropdown}
            onMouseLeave={toggleCoffeeInfoDropdown}
          >
            <span>Coffee Info</span>
            <div
              className={`dropdown-content ${isCoffeeInfoDropdownOpen ? "open" : ""}`}
            >
              <Link to="/marketprices">Market Prices</Link>
              <Link to="/soil">Soil</Link>
              <Link to="/farmingmethods">Farming Methods</Link>
            </div>
            {isCoffeeInfoDropdownOpen && (
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            )}
          </div>
          {isUserLoggedIn && loggedInUser ? (
            <>
              <Link className="dashb" to="/dashboard">
                Dashboard
              </Link>
              <div className="logname">
                <span className="first">{loggedInUser.first_name} ({loggedInUser.user_type})</span>
                <button className="out" onClick={() => localStorage.clear()}><span><Link  className="out2" to="/logout">Logout</Link></span></button>
              </div>
            </>
          ) : (
            <div className="auth">
              <button className="authl">
                <Link className="ll" to="/login">
                  Login
                </Link>
              </button>
              <button className="auths">
                <Link className="ls" to="/signup">
                  Signup
                </Link>
              </button>
            </div>
          )}
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer>
        <div className="foot">
     <div className="f1">
       <img src={logo} alt="Your Logo" className="logof" />
     </div>
     <div className="f2">
       <h3>What we do</h3>
       <p>Direct Connection</p>
       <p>Education and Training</p>
       <p>Community Building</p>
       <p>Quality Assurance</p>
     </div>
     <div className="f2">
       <h3>Focus Areas</h3>
       <p>Coffee Market Support</p>
       <p>Social Interaction</p>
       <p>Product Showcase</p>
       <p>Affordable coffee</p>
     </div>
     <div className="social-icons">
       <div>
         <h4>Follow us</h4>
       </div>
       <div className="icons">
        <a
          className="linkedin"
          href="https://www.linkedin.com/search/results/all/?keywords=coffee%20growing%20in%20Uganda&origin=GLOBAL_SEARCH_HEADER&sid=nz3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
          <br />
        </a>
        <a
          className="twitter"
          href="https://twitter.com/search?q=coffee%20farming&src=typed_query"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
          <br />
        </a>
        <a
          className="github"
          href="https://github.com/joycetin/mwanyi_platform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
          <br />
        </a>
      </div>
    </div>
  </div>
  <div className="copy">&copy; 2023 Mwanyi Ecommerce Platform</div>
      </footer>
    </div>
  );
};

export default Layout;
