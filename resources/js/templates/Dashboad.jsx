import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'

const Dashboad = () => {
  const { isAuth, user } = useContext(AuthContext)

  console.log('isAuth: ', isAuth)
  console.log('user: ', user)

  return (
    <>
      <p>dashboad!!</p>
    </>
  )
}

export default Dashboad
