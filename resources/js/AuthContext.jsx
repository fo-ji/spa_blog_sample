import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const APP_KEY = 'laravelBlogSample'

const AuthContextProvider = (props) => {
  const token = localStorage.getItem(APP_KEY)
  const [user, setUser] = useState({})
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (token) {
      axios.get(`/api/user?api_token=${token}`).then((res) => {
        setUser(res && res.data ? res.data : null)
        setIsAuth(res && res.data ? true : false)
      })
    }
  }, [])

  const login = (user) => {
    setUser(user)
    setIsAuth(true)
    localStorage.setItem(APP_KEY, user.api_token)
  }

  return (
    <AuthContext.Provider value={{ user, login, isAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
