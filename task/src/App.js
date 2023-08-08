import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home.js';
import Achievements from './Components/Achievements.js';
import Projects from './Components/Projects.js';
import Profile from './Components/Profile.js';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route index element={<Profile/>} /> 
        <Route path ="Achievements" element={<Achievements/>} />
        <Route path ="Projects" element={<Projects/>} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;