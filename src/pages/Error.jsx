import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <h1>No Page Found here  <NavLink to="/">Go Back to Home Page</NavLink></h1>
    </div>
  )
}
