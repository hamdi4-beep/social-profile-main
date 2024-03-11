import avatarUrl from './assets/images/avatar-hamdi.jpg'
import './sass/index.scss'

function ProfileLinksContainer() {
  return (
    <div className="profile-links">
      <button>
        <a href="http://github.com/hamdi4-beep">GitHub</a>
      </button>

      <button>
        <a href="https://www.frontendmentor.io/profile/hamdi4-beep">Frontend Mentor</a>
      </button>
      
      <button>
        <a href="https://www.linkedin.com/in/hamdi-kamel-bab017b8/">LinkedIn</a>
      </button>
      
      <button>
        <a href="https://twitter.com/Hamdi33727935">Twitter</a>
      </button>
      
      
      <button>
        <a href="https://www.instagram.com/hamdi_beep4/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">Instagram</a>
      </button>
    </div>
  )
}

function ProfileContainer() {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-avatar">
          <img src={avatarUrl} alt="jessica's profile picture" />
        </div>

        <h3 className='name'>Hamdi Kamel</h3>
        <p className="location">Bizert, Tunisia</p>
        <p className="bio">"Front-end developer and avid reader."</p>

        <ProfileLinksContainer />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ProfileContainer />
    </div>
  )
}

export default App