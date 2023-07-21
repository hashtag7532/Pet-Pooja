import React from 'react'
import { IoMdNotifications, IoMdSettings } from 'react-icons/io'

function MainPage() {
  return (
    <div className='flex justify-between py-3'>
      <div className='text-xl font-bold'>
        <span>PetPooja</span>
      </div>
      <div className='flex flex-row'>
        <IoMdNotifications className='cursor-pointer' size={28} />
        <IoMdSettings className='cursor-pointer' size={28} />
      </div>
    </div>
  )
}

export default MainPage
