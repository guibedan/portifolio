import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualifications from './components/qualifications/Qualifications'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
