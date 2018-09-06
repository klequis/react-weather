import React from 'react'
import CurrentConditions from '../CurrentConditions'
import { conditions } from '../../data'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Weather</h1>
        <CurrentConditions
          conditions={conditions}
        />
      </div>
    )
  }
}

export default App
