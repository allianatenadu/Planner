import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
        No Page Found here
      </h1>
      <NavLink 
        to="/" 
        className="mt-4 text-lg sm:text-xl md:text-2xl text-blue-500 hover:text-blue-700 transition-all duration-300"
      >
        Go Back to Home Page
      </NavLink>
    </div>
  )
}
