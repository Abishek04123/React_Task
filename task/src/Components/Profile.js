import './Profile.css'
import logo from '../Assets/WhatsApp Image 2023-07-14 at 19.19.29.jpg'
import ai from '../Assets/AI.jpg'

const Profile = () => {
    return (
        <div className='html'>
            <div className='head'>

            <div className='maintext'>
                <i><h2>Abi</h2></i>
                <i><b><p>Artificial Intelligence and Data Science</p></b></i>
            </div>
            
            <div className='img_div'><img src={logo} alt='me' className='me'></img></div>

            </div>

            <p className = 'about'> Hey Viewer ! I am Abishek, an aspiring enginnering pursuing B.Tech Artificial Intelligence
                and Data Science from Kumaraguru College of Technology, Coimbatore. I am a student with
                an excellent academic record and a lot of passion. I love to explore about new technologies
                and have a curious mind. I am an excellent team player, I love to work as a team. I am 
                responsible and honest.</p>
            
            <img src={ai} alt = 'ai' className='ai'></img>

        </div>
    )
  };
  
  export default Profile;