import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const Dashboad = () => {
  const { user } = useContext(AppContext)

  console.log('user: ', user)

  return (
    <div className="container">
      <div>dashboad!!</div>
      <p>{user.name}</p>
    </div>
  )
}

export default Dashboad
