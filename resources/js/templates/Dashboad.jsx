import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'

const Dashboad = () => {
  const { isAuth, user } = useContext(AuthContext)

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
