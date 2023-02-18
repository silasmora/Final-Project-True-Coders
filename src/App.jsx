import './App.css'
import Iss from "./components/Iss"
import Astronauts from "./components/Astronauts"
import Home from "./components/Home"
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <div>
            <img className="iss-logo" src="./images/iss.svg.png"/>
        </div>
        <div className='navbar'>
          <NavLink to="/" className="tags"><span>HOME</span></NavLink>
          <img className='iss-svg' src="./images/iss.svg" />
          <NavLink to="/iss" className="tags"><span>ISS LOCATION</span></NavLink>
          <img className='iss-svg' src="./images/astro.svg" />
          <NavLink to="/astronauts" className="tags"><span>HUMANS IN SPACE</span></NavLink>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/iss' element={ <Iss />} />
            <Route path='/astronauts' element={ <Astronauts />} />
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
