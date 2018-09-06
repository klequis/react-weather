import React from 'react'

const CurrentConditions = (props) => {
  const { conditions } = props
  return (
    <div>
      <h2>Current Conditions</h2>
      <div id='current-conditions'>
        <div>
          <img src={conditions.icon_url} />
          <p>{conditions.weather}</p>
          <p>{conditions.temp}</p>
        </div>
        <div>
          <p>Dewpoint {conditions.dewpoint}</p>
          <p>Feels like {conditions.feelslike}</p>
          <p>Pressure {conditions.pressure} {conditions.pressure_trend}</p>
          <p>Relative humidity: {conditions.relative_humidity}</p>
        </div>
        <div>
          <p>UV: {conditions.uv}</p>
          <p>Wind {conditions.wind_dir} at {conditions.windspeed}</p>
          <p>Gusts {conditions.windgust}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentConditions