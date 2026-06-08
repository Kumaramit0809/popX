import '../styles/profile.css'

export default function Profile() {
  return (
    <div className="screen-container">
      <div className="profile-screen">
        <div className="profile-header">
          <h2 className="profile-header-title">Account Settings</h2>
        </div>

        <div className="profile-body">
          <div className="profile-user-row">
            <div className="profile-avatar-wrapper">
              <img
                className="profile-avatar"
                src="https://i.pravatar.cc/150?img=47"
                alt="Marry Doe"
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
              />
              <div className="profile-avatar-placeholder" style={{display:'none'}}>👤</div>
              <div className="profile-camera-badge">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4z"/>
                  <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
                </svg>
              </div>
            </div>
            <div className="profile-user-info">
              <span className="profile-name">Marry Doe</span>
              <span className="profile-email">Marry@Gmail.Com</span>
            </div>
          </div>

          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

          <hr className="profile-divider" />
        </div>
      </div>
    </div>
  )
}
