import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Register } from './templates'
import '../css/app.css'

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="flex-center position-ref full-height">
        <Router>
          <Switch>
            <Route exact path={'(/)?'} component={Home} />
            <Route exact path={'/register'} component={Register} />
          </Switch>
        </Router>
      </main>
    </>
  )
}

export default App
