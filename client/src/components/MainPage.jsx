import React from 'react'
import { IoMdNotifications, IoMdSettings } from 'react-icons/io'
import {Link} from "react-router-dom"

function MainPage() {
  return (
    <div className='flex py-3 justify-between w-full'>
      <div className='text-xl font-bold'>
        <Link to={"/"}>PetPooja</Link>
      </div>
      <div className='flex flex-row mr-8'>
        <IoMdNotifications className='cursor-pointer mx-3' size={28} />
        <IoMdSettings className='cursor-pointer' size={28} />
      </div>
    </div>
  )
}

export default MainPage
