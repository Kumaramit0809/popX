import '../styles/button.css'

export default function Button({ children, variant = 'primary', onClick, type = 'button', disabled }) {
  return (
    <button
      type={type}
      className={`popx-btn popx-btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
