import React from 'react'

const styles = {
  list: {
    listStyle: 'none',
  },
  item: {
    margin: '10px 0 10px 0'
  },
}

const LocationData = (props) => {
  const { location } = props
  return (
    <div>
      <h2>Location Information</h2>
      <ul style={styles.list}>
        <li style={styles.item}>Elevation: {location.elevation}</li>
        <li style={styles.item}>Latitude: {location.latitude}</li>
        <li style={styles.item}>Longitude: {location.longitude}</li>
      </ul>
    </div>
  )
}

export default LocationData