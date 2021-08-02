import React from 'react'

function HeaderIcon({ Icon, active }) {
   return (
      <div className={`pt-1 hidden md:inline ${active && 'border-b-4 border-blue-500'}`}>
         <div className={`flex items-center cursor-pointer ${!active && 'md:hover:bg-gray-100'} md:px-4 lg:px-10 sm:h-12 rounded-lg group`}>
            <Icon className={`h-5 text-gray-500 sm:h-7 group-hover:text-blue-500 mx-auto ${active && 'text-blue-500'}`}/>
         </div>
      </div>
   )
}

export default HeaderIcon
