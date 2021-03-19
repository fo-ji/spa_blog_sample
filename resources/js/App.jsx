import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Dashboad, Home, Register, Login } from './templates'
import { Header } from './components'
import '../css/app.css'
import AppContextProvider from './AppContext'

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <Header />
        <main className="flex-center full-height">
          <Switch>
            <Route exact path={'(/)?'} component={Home} />
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/dashboad'} component={Dashboad} />
          </Switch>
        </main>
      </AppContextProvider>
    </Router>
  )
}

export default App
