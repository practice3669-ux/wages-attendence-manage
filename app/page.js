'use client'

import { useState } from 'react'
import Login from '../components/Login'
import App from '../components/App'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div>
      {isLoggedIn ? <App /> : <Login onLogin={handleLogin} />}
    </div>
  )
}