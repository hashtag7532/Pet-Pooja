import React from 'react'
import MainPage from '../components/MainPage'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
  <div>
    <section className='flex gap-6'>
        <Sidebar />
        <MainPage />
    </section>
  </div>
  )
}

export default Home