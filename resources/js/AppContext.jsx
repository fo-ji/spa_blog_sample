import React, { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const AppContext = createContext()

const APP_KEY = 'laravelBlogSample'
const initialToken = localStorage.getItem(APP_KEY)

const AppContextProvider = (props) => {
  const [localToken, setLocalToken] = useState(initialToken)
  const [user, setUser] = useState({})
  const [isAuth, setIsAuth] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (localToken) {
      axios.get(`/api/user?api_token=${localToken}`).then((res) => {
        setUser(res && res.data ? res.data : null)
        setIsAuth(res && res.data ? true : false)
      })
    }
  }, [])

  const login = (user) => {
    localStorage.setItem(APP_KEY, user.api_token)
    setUser(user)
    setIsAuth(true)
    setLocalToken(localStorage.getItem(APP_KEY))
  }

  const logout = () => {
    axios.post(`/api/logout?api_token=${localToken}`).then((res) => {
      setUser({})
      setIsAuth(false)
      setLocalToken(null)
      localStorage.clear()
      history.push('/')
    })
  }

  console.log('localToken: ', localToken)

  return (
    <AppContext.Provider
      value={{ user, localToken, login, logout, history, isAuth }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
