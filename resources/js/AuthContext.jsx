import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({})
  const [isAuth, setIsAuth] = useState(false)

  const login = (user) => {
    setUser(user)
    setIsAuth(true)
  }

  return (
    <AuthContext.Provider value={{ user, login, isAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
