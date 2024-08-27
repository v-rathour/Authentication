import React, { useState } from 'react';
import "./LoginPage.css"
import axios from 'axios';
const LoginPage = () => {
    const [username, setUsername] = useState('');
   
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your login logic here
      try {
        const response = await axios.post("http://localhost:8000/login", { username, password });
        
        console.log(response);
        
      }
      catch (err) {
        console.log(err);
      }
      
    };

    return (
      <div className="container">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
};

export default LoginPage;