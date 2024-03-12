import ProfileContainer from './components/ProfileContainer'
import './css/output.css'

const linkColor = 'text-blue-400'

function App() {
  return (
    <div className="App my-4">
      <ProfileContainer />

      <div className="text-center">
        Challenge by <a className={linkColor} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className={linkColor} href="https://www.frontendmentor.io/profile/hamdi4-beep">Hamdi Kamel</a>.
      </div>
    </div>
  )
}

export default App