import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'
import '../styles/signup.css'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })
  const [error, setError] = useState('')

  const update = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = () => {
    if (!form.fullName.trim() || !form.phone.trim() || !form.email.trim() || !form.password.trim()) {
      setError('Please fill all required fields.')
      return
    }
    localStorage.setItem('popx_user', JSON.stringify({
      fullName: form.fullName,
      phone: form.phone,
      email: form.email,
      password: form.password,
      company: form.company,
      isAgency: form.isAgency,
    }))
    setError('')
    navigate('/profile')
  }

  return (
    <div className="screen-container">
      <div className="signup-screen">
        <h1 className="signup-heading">Create your<br />PopX account</h1>
        <div className="signup-form">
          <InputField
            label="Full Name"
            required
            value={form.fullName}
            onChange={update('fullName')}
            placeholder="Marry Doe"
          />
          <InputField
            label="Phone number"
            required
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="Marry Doe"
          />
          <InputField
            label="Email address"
            required
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="Marry Doe"
          />
          <InputField
            label="Password"
            required
            type="password"
            value={form.password}
            onChange={update('password')}
            placeholder="Marry Doe"
          />
          <InputField
            label="Company name"
            value={form.company}
            onChange={update('company')}
            placeholder="Marry Doe"
          />

          <div className="agency-section">
            <p className="agency-label">Are you an Agency?<span>*</span></p>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={update('isAgency')}
                />
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={update('isAgency')}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {error && <p className="signup-error">{error}</p>}
        </div>

        <div className="signup-cta">
          <Button variant="primary" onClick={handleSubmit}>
            Create Account
          </Button>
        </div>
      </div>
    </div>
  )
}
