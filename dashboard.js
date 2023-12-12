import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const [formData, setFormData] = useState({ region: '' });
  const [loggedInUser, setLoggedInUser] = useState({});
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem('user')) || {};
    setLoggedInUser(userFromStorage);

    fetch('http://127.0.0.1:5000/users/all')
      .then(res => res.json())
      .then(data => setUsers(data.data || [])); // Ensure users is an array
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter(user => {
      if (loggedInUser.user_type === 'buyer') {
        return user.user_type === 'farmer';
      } else if (loggedInUser.user_type === 'farmer') {
        return user.user_type === 'buyer';
      }
      return false;
    });

    setVisibleUsers(filteredUsers);
  }, [users, loggedInUser.user_type]);

  const handleSendMessage = (user) => {
    const newMessage = {
      sender: loggedInUser.user_type,
      receiver: user.user_type,
      content: 'Your default message content here.',
    };

    setMessages([...messages, newMessage]);
  };

  const handleSendButtonClick = (user) => {
    if (user.contact && user.contact.includes('button')) {
      handleSendMessage(user);
    } else {
      console.log(`Contacting ${user.name} via: ${user.contact}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setVisibleUsers(users.filter(user => user.region === value));
  };

  if (!loggedInUser || !loggedInUser.user_type) {
    // Redirect to login or handle the case where the user is not logged in
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className='dashboard-b'>
      <div className='dashboard-container'>
        {!isLoggedIn && <Navigate to='/login' replace={true} />}
        <div>
          {selectedUser && (
            <div>
              <h2>Messages with {selectedUser.name}</h2>
              <div>
                {messages.map((msg, index) => (
                  <div key={index}>
                    <strong>{msg.sender}:</strong> {msg.content}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <h6>Search by Region:</h6>
          <div className="typesR">
            <label>Region :</label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="search-region"
            >
              <option value="">Select Region</option>
              <option value="central">Central</option>
              <option value="eastern">Eastern</option>
              <option value="western">Western</option>
              <option value="northern">Northern</option>
              <option value="southern">Southern</option>
            </select>
            {/* Removed errors.region check as it was not defined in the original code */}
          </div>
        </div>
        <table>
          <thead style={{ backgroundColor: loggedInUser.user_type === 'buyer' ? 'yellow' : 'green' }} className={loggedInUser.user_type === 'buyer' ? 'heads-buyer' : 'heads-farmer'} >
            <tr>
              <th>Name</th>
              <th>User Type</th>
              <th>Region</th>
              {loggedInUser.user_type === 'farmer' && <th>Price</th>}
              {loggedInUser.user_type === 'buyer' && <th>Quantity</th>}
              <th>
                <p>Contact</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleUsers.map((user) => (
              <tr key={user.id}>
                <td className='fn'>{`${user.first_name} ${user.last_name}`}</td>
                <td>{user.user_type}</td>
                <td>{user.region}</td>
                {loggedInUser.user_type === 'farmer' && <td>{user.quantity}</td>}
                {loggedInUser.user_type === 'buyer' && <td>{user.price}</td>}
                <td>
                  {user.contact && user.contact.includes('button') ? (
                    <button onClick={() => handleSendButtonClick(user)}>
                      Send Message
                    </button>
                  ) : (
                    user.contact
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
