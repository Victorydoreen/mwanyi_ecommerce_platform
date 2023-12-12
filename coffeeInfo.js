import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function CoffeeInfo() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="coffee-info-dropdown">
      <div className="dropdown-link" onClick={toggleDropdown}>
        CoffeeInfo
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <Link to="/soil">Soil</Link>
          <Link to="/farmingmethods">Farming Methods</Link>
          <Link to="/marketprices">Market Prices</Link>
          {/* Add more options as needed */}
        </div>
      )}
    </div>
  );
}

export default CoffeeInfo;
