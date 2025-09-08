import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {

const Menus = [
  {
    label: "Dashboard",
    url: '/admin/dashboard'
  },
  {
    label: "Ebook",
    url: '/admin/ebook'
  },
  {
    label: "Setting",
    url: '/admin/setting'
  }
]
  return (
    <>
     <aside className='p-5'>
      <div className="flex flex-col gap-1">
      {
        Menus.map((item, index) => (
          <NavLink key={index} to={item.url} className={({isActive}) => `${isActive ? 'bg-indigo-800 text-white' : 'bg-slate-100 text-black'} px-4 py-3 rounded hover:bg-indigo-800 hover:text-white`}>
           {item.label}
        </NavLink>
        ))
      }  
      </div>
     </aside>
    </>
  )
}

export default Sidebar