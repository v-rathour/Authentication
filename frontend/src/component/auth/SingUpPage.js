import React, { useState } from 'react';
import "./SignUpPage.css"
import axios from 'axios';


const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp =async () => {
        
      try {
        const response = await axios.post(
          "http://localhost:8000/signup",
          {
            username,
            email,
            password,
          }
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div className="container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    );
};

export default SignUpPage;