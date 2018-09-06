import React from 'react'

const Day = (props) => {
  return (
    <div>
      <h3>{props.date}</h3>
      <p>Temp: {props.temp}</p>
    </div>
  )
}

export default Day