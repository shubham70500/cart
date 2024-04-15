import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FlipMove from 'react-flip-move';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call authentication service with formData
    // Redirect upon successful login
  };

  return (
    <div className="container mt-5">
      <FlipMove>
        <div className="card">
          <h2 className="card-header">Login</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
          <div className="card-footer">
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          </div>
        </div>
      </FlipMove>
      
    </div>
  );
};

export default LoginPage;
