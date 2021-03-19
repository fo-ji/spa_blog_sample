import React, { createContext, useContext } from 'react'
import { Redirect } from 'react-router'
import { AppContext } from './AppContext'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const { isAuth, localToken } = useContext(AppContext)

  return (
    <>
      {localToken || isAuth ? (
        <AuthContext.Provider>{props.children}</AuthContext.Provider>
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}

export default AuthContextProvider
