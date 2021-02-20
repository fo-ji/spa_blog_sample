import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="top-right links">
      {/* 認証前のヘッダー */}
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
      {/* [TODO]認証後のヘッダー */}
      {/* [TODO]管理者専用のメニュー */}
    </div>
  )
}

export default Header
