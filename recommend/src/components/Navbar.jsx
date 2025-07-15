import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className='flex justify-between'>
        <div className='flex space-x-4 items-center p-2'>
                    <img className='h-16 w-16' src="/src/assets/logo.png" alt="" />
                    <h1 className='text-2xl text-purple-400 font-bold'>BookRecommend</h1>
        </div>

        <div className='flex items-center mr-10 space-x-4'>
           <NavLink className= {({isActive} ) => isActive ? 'text-blue-500 font-bold text-lg' : 'text-gray-700 text-lg'} to='/'>Home</NavLink>
        <NavLink  className= {({isActive} ) => isActive ? 'text-blue-500 font-bold text-lg' : 'text-gray-700 text-lg'} to='/recommand'>Recommend</NavLink>
        </div>

        

       

    </div>
    <hr className='bg-gray-300 h-0.5'/>
    </div>
  )
}

export default Navbar