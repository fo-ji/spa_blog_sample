import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const Dashboad = () => {
  const { isAuth, user } = useContext(AppContext)

  console.log('isAuth: ', isAuth)
  console.log('user: ', user)

  return (
    <div className="container">
      <div>dashboad!!</div>
      <p>{user.name}</p>
    </div>
  )
}

export default Dashboad
