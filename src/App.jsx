import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import Home from './components/Home.JSX'
import SideNav from './components/SideNav'
import CreateCrewmate from './components/CreateCrewmate'
import CrewmateGallery from './components/CrewmateGallery'
import ErrorPage from './components/ErrorPage'
import CrewmateInfoPage from './components/CrewmateInfoPage'
import './assets/css/styles.css'
import EditCrewmate from './components/EditCrewmate'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <SideNav/>
      <div className="whole-page">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<CreateCrewmate/>}></Route>
            <Route path='/gallery' element={<CrewmateGallery/>}></Route>
            <Route path='/:id' element={<CrewmateInfoPage/>}></Route>
            <Route path='/:id/edit' element={<EditCrewmate/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
