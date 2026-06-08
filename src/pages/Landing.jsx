import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import '../styles/landing.css'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="screen-container">
      <div className="landing-screen">
        <div className="landing-content">
          <h1 className="landing-heading">Welcome to PopX</h1>
          <p className="landing-subtitle">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
          <div className="landing-buttons">
            <Button variant="primary" onClick={() => navigate('/signup')}>
              Create Account
            </Button>
            <Button variant="secondary" onClick={() => navigate('/login')}>
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
