import './Profile.css'
import logo from '../Assets/WhatsApp Image 2023-07-14 at 19.19.29.jpg'

const Profile = () => {
    return (
        <div className='main'>

        <div className='maintext'>
            <i><h1>About Me</h1></i>
            <i><h2>Abishek R</h2></i>
            <i><b><p>Artificial Intelligence and Data Science</p></b></i>
        </div>
        
        <div className='img_div'><img src={logo} alt='me'></img></div>

        </div>
    )
  };
  
  export default Profile;