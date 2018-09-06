import React from 'react'

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    width: '100%',
    // backgroundColor: 'green',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    // backgroundColor: 'orange',
  },
  conditions: {
    paddingBottom: '20px',
    justifyContent: 'space-around'
  },
  temp: {
    fontSize: '2em'
  }
}
const CurrentConditions = (props) => {
  const { conditions } = props
  return (
    <div style={styles.wrapper}>
      <h2>Current Conditions</h2>
      <div id='content' style={styles.content}>
        <div>
          <div style={styles.conditions}>
            <img src={conditions.icon_url} />
            <div>{conditions.weather}</div>
          </div>
          <div style={styles.temp}>{conditions.temp}</div>
        </div>
        <div>
          <p>Dewpoint: {conditions.dewpoint}</p>
          <p>Feels like: {conditions.feelslike}</p>
          <p>Pressure: {conditions.pressure} {conditions.pressure_trend}</p>
          <p>Relative humidity: {conditions.relative_humidity}</p>
        </div>
        <div>
          <p>UV: {conditions.uv}</p>
          <p>Wind: {conditions.wind_dir} at {conditions.windspeed}</p>
          <p>Gusts: {conditions.windgust}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentConditions