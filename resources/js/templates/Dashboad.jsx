import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const Dashboad = () => {
  const { user, history } = useContext(AppContext)

  return (
    <div className="container">
      <h2>dashboad!!</h2>
      <p>ログインユーザー：{user.name}</p>
      <button onClick={() => history.push('/posts')}>投稿一覧へ</button>
    </div>
  )
}

export default Dashboad
