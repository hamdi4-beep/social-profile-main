import ProfileLinksContainer from "./ProfileLinksContainer"
import avatarUrl from './assets/images/avatar-hamdi.jpg'

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

  export default ProfileContainer