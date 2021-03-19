import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'

const Header = () => {
  const { isAuth, logout } = useContext(AppContext)

  return (
    <div className="top-right links">
      {isAuth === true ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </>
      )}
      {/* [TODO]管理者専用のメニュー */}
    </div>
  )
}

export default Header
