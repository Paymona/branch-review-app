import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThreeFaces } from './routes'

const App = () => {
  return (
    <div>
      
      <Switch>

        <Route path='/'>
          <ThreeFaces />
        </Route>

        <Route path='/review'>
          review
        </Route>

      </Switch>

    </div>
  )
}

export default App
