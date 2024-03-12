import LinksContainer from "./LinksContainer"
import avatarUrl from '../assets/images/avatar-hamdi.jpg'

function ProfileContainer() {
    return (
      <div className="p-6 m-8 mx-auto max-w-sm shadow-lg rounded-xl text-center">
        <div className="">
          <div className="flex my-3">
            <img className='rounded-full mx-auto w-20' src={avatarUrl} alt="hamdi's profile picture" />
          </div>
  
          <h3 className="font-bold text-xl">Hamdi Kamel</h3>
          <p className="text-slate-500">Bizert, Tunisia</p>
          <p className="py-4">"A curious soul craving knowledge and seeking inspiration."</p>
  
          <LinksContainer />
        </div>
      </div>
    )
  }

  export default ProfileContainer