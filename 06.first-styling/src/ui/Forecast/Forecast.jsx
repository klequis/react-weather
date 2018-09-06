import React from 'react'
import Day from '../Day'

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    width: '100%',
    // backgroundColor: 'green',
  },
  days: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    width: '100%',
    // backgroundColor: 'orange',
  }
}
const CurrentConditions = (props) => {
  return (
    <div style={styles.wrapper}>
      <h2>Forecast</h2>
      <div style={styles.days}>
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
    </div>
  )
}

export default CurrentConditions