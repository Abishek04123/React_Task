import { Outlet, Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (
      <div>
        
        <nav>
            <Link to="/"><button>Profile</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
            <Link to="/achievements"><button>Achievements</button></Link>
        </nav>
  
        <Outlet />
      </div>
    )
  };
  
  export default Home;