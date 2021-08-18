import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThreeFaces, Review, ThanksPage } from './routes'

const App = () => {
  return (
    <div className='App'>
      
      <Switch>

        <Route path='/:id/thanks'>
          <ThanksPage />
        </Route>

        <Route path='/:id/review'>
          <Review />
        </Route>

        <Route path='/:id/'>
          <ThreeFaces />
        </Route>

      </Switch>

    </div>
  )
}

export default App
