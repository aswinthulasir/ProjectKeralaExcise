import React from 'react'
import './App.css'
import NavbarComp from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from './components/SubNavbar';
import AdminDashboard from './pages/AdminDashboard';
import DarkVariantExample from './pages/UserHome';
import ScrollingTextBar from './components/ScrollBar';
import 'ionicons/icons';
import CardsOfc from './components/CardsOfc';


function App() {
  

  return (
    <>
    
     <NavbarComp/>
     <DarkVariantExample/>
     <div className='div-scroll'>
    <ScrollingTextBar />
    </div>
    <div>
      <CardsOfc />
    </div>
    </>
  )
}


export default App
