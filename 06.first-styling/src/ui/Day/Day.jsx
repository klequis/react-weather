import React from 'react'

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
  },
}
const Day = (props) => {
  return (
    <div style={styles.wrapper}>
      <h3 style={styles.heading}>{props.date}</h3>
      <p>Temp: {props.temp}</p>
    </div>
  )
}

export default Day