import React from 'react'
import Day from '../Day'

const CurrentConditions = (props) => {
  return (
    <div>
      <h2>Forecast</h2>
      {
        props.forecast.map(d => {
          return (
            <Day
              key={d.date}
              date={d.date}
              temp={d.temp}
            />
          )
        })
      }
    </div>
  )
}

export default CurrentConditions