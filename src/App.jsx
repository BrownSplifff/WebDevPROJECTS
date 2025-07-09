import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./css/App.css"
import MovieCard from './components/movieCard'
import Homepage from './pages/Home'
import Home from './pages/Home'
import Fav from './pages/Fav'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return(
    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Fav" element={<Fav/>}/>

      </Routes>
    </main>
    </div>
  );

}


export default App;
