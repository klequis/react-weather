import React from 'react'
import CurrentConditions from '../CurrentConditions'
import { conditions } from '../../data'
import Forecast from '../Forecast'
import { forecast } from '../../data'
import CitySearch from '../CitySearch'
import LocationData from '../LocationData'
import { location } from '../../data'

const styles = {
  wrapper: {
    padding: '0 10% 5% 10%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  header: {
    marginBottom: '30px'
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.header}>React Weather</h1>
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
