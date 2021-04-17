import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'

const Header = () => {
  const { isAuth, logout } = useContext(AppContext)

  return (
    <div style={{ height: '50px' }}>
      <div className="top-right links">
        {isAuth ? (
          <>
            <Link to={'/dashboad'}>Dashboad</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </>
        )}
        {/* [TODO]管理者専用のメニュー */}
      </div>
    </div>
  )
}

export default Header

