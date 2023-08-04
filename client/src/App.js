import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <section className='flex gap-6'>
        <Sidebar />
        <div className='flex flex-col w-full'>
          <Navbar />
          <Home />
        </div>
      </section>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/orders' exact element={<Orders />} />
        <Route path='/analytics' exact element={<Analytics />} />
      </Routes>
    </>
  )
}

export default App