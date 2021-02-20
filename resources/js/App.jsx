import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Register, Login } from './templates'
import { Header } from './components'
import '../css/app.css'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="flex-center full-height">
        <Switch>
          <Route exact path={'(/)?'} component={Home} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/login'} component={Login} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
