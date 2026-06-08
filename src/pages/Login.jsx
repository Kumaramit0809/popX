import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'
import '../styles/login.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    navigate('/profile')
  }

  return (
    <div className="screen-container">
      <div className="login-screen">
        <h1 className="login-heading">Signin to your<br />PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
        <div className="login-form">
          <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <Button variant="gray" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
