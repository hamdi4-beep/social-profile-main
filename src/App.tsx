import avatarUrl from './assets/images/avatar-jessica.jpeg'
import './sass/index.scss'

function ProfileContainer() {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-avatar">
          <img src={avatarUrl} alt="jessica's profile picture" />
        </div>

        <h3 className='name'>Jessica Randall</h3>
        <p className="location">London, United Kingdom</p>
        <p className="bio">"Front-end developer and avid reader."</p>
      </div>
      
      <div className="profile-links">
        <Button title='GitHub' />
        <Button title='Frontend Mentor' />
        <Button title='LinkedIn' />
        <Button title='Twitter' />
        <Button title='Instagram' />
      </div>
    </div>
  )
}

function Button({
  title
}: {
  title: string
}) {
  return (
    <button>{title}</button>
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