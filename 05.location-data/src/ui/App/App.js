import React from 'react'
import CurrentConditions from '../CurrentConditions'
import { conditions } from '../../data'
import Forecast from '../Forecast'
import { forecast } from '../../data'
import CitySearch from '../CitySearch'
import LocationData from '../LocationData'
import { location } from '../../data'


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Weather</h1>
        <CitySearch />
        <CurrentConditions
          conditions={conditions}
        />
        <Forecast
          forecast={forecast}
        />
        <LocationData
          location={location}
        />
      </div>
    )
  }
}

export default App
