import React, {useState, useEffect} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import {TbReportAnalytics} from 'react-icons/tb'
import {AiOutlineUser} from 'react-icons/ai'
import {RiBillLine} from 'react-icons/ri'
import {MdTableBar} from 'react-icons/md'
import {MdOutlineInventory2} from 'react-icons/md'
import {BiHelpCircle} from 'react-icons/bi'
import {Link} from "react-router-dom"

function Sidebar() {
  const menus = [
    {name : 'Dashboard', link : '/', icon : MdOutlineDashboard, margin:true, key : 1},
    {name : 'Orders and Billing', link : '/orders', icon : RiBillLine, margin:true, key : 2},
    {name : 'Tables', link : '/tables', icon : MdTableBar, margin:true, key : 3},    
    {name : 'Inventory', link : '/inventory', icon : MdOutlineInventory2, margin:true, key : 4},    
    {name : 'Analytics', link : '/analytics', icon : TbReportAnalytics, margin:true, key : 5},
    {name : 'User', link : '/user', icon : AiOutlineUser, margin:true, key : 6},
    {name : 'Help Manual', link : '/help', icon : BiHelpCircle, margin:true, key : 7},
  ]

  const [open, setOpen] = useState(true);
  const [currentLink, setCurrentLink] = useState(7);
  
  return (
    <div className={`min-h-screen px-4 duration-500 ${open ? "w-72" : "w-16"} bg-slate-100`}>
      <div className='py-3 flex justify-end'>
        <HiMenuAlt3 
          size={26} 
          className='cursor-pointer' 
          onClick={() => setOpen(!open)}
        />
      </div>
      <div>
        {menus?.map((menu, i)=>(
          <Link 
            to={menu?.link} 
            key={i} 
            className={`${
              menu?.margin && "mt-5" && currentLink == i ? "active" : ""
            } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md`}
            onClick={() => setCurrentLink(i)}
          >
              <div>{React.createElement(menu?.icon,{size:'20'})}</div>
              <h2 
              style={{
                transitionDelay:`${i+3}00ms`
              }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2 className={` ${open && 'hidden'} absolute left-48 font-semibold whitespace-pre text-gray-900 bg-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>
                {menu?.name}
              </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar