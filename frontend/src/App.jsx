import React from 'react'
import './App.css'
import NavbarComp from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from './components/SubNavbar';
import AdminDashboard from './pages/AdminDashboard';
import DarkVariantExample from './pages/UserHome';

function App() {
  

  return (
    <>
    
     <NavbarComp/>
     <DarkVariantExample/>
    </>
  )
}


export default App
