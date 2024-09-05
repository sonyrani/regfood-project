import Topnavbar from './components/Topnavbar.js';
import { Navbar } from './components/Navbar.js';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
function App() {
  return (
    <>
    <Topnavbar/>
    <Navbar/>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/about"  element={<About />}/>
      <Route path="/menu"  element={<Menu/>}/>
    </Routes>
   
    
    </>
  );
}

export default App;
