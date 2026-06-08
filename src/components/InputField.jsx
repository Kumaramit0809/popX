import '../styles/inputfield.css'

export default function InputField({ label, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div className="input-wrapper">
      <label className="input-label">
        {label}{required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        className="input-field"
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
      />
    </div>
  )
}
