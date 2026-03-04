import React from 'react'
import { Outlet } from 'react-router-dom'

const privateRoute = ({allowedRoles}) => {
  return <Outlet/>
}

export default privateRoute