import React from 'react'
import NavbarComp from './components/Navbar'
import DarkVariantExample from './pages/UserHome'
import ScrollingTextBar from './components/ScrollBar'
import CardsOfc from './components/CardsOfc'
import GovtInitiatives from './pages/ImpOnlineServices'
import AboutDepartment from './pages/About'
import OnlineServices from './pages/Eservices'
import NewsAndAnnouncements from './pages/NewsAnnounce'
import Gallery from './pages/Gallery'
import Footer from './pages/Footer'
import FooterCarousalPage from './pages/FooterCarousalPage'

const Home = () => {
  return (
    <>
    
    <NavbarComp />
    <DarkVariantExample />
    <div className='div-scroll'>
        <ScrollingTextBar />
    </div>
    <div>
        <CardsOfc />

    </div>
    <GovtInitiatives />
    <AboutDepartment />
    <OnlineServices />
    <NewsAndAnnouncements />
    <Gallery />
    <FooterCarousalPage />
    <Footer />

    </>
  )
}

export default Home