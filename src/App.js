import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThreeFaces } from './routes'

const App = () => {
  return (
    <div className='App'>
      
      <Switch>

        <Route path='/review'>
          review
        </Route>

        <Route path='/'>
          <ThreeFaces />
        </Route>

      </Switch>

    </div>
  )
}

export default App
