'use client'

import { useState } from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // For now, simple check
    if (username === 'admin' && password === 'admin') {
      onLogin()
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div id="loginPage">
      <div className="login-container">
        <div className="login-header">
          <h1>
            <i className="fas fa-calculator"></i>
            Hisab
          </h1>
          <p>Workshop Salary Management System</p>
        </div>
        <div className="login-body">
          {error && <div className="alert alert-error"><i className="fas fa-exclamation-triangle"></i>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label><i className="fas fa-user"></i> Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label><i className="fas fa-lock"></i> Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`fas fa-${showPassword ? 'eye-slash' : 'eye'}`}></i>
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-sign-in-alt"></i>
              Login
            </button>
          </form>
        </div>
        <div className="login-footer">
          <p>&copy; 2025 Hisab Workshop Management. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}