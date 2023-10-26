
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Page/home/Home';
import About from './Page/about/About';
import Character from './Page/character/Character';



function App() {
  return (
    <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/character" element={<Character />} />
    </Routes>
  );
}

export default App;
