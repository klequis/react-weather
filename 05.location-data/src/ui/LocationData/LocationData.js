import React from 'react'

const LocationData = (props) => {
  const { location } = props
  return (
    <div>
      <h2>Location Information</h2>
      <ul>
        <li>Elevation: {location.elevation}</li>
        <li>Latitude: {location.latitude}</li>
        <li>Longitude: {location.longitude}</li>
      </ul>
    </div>
  )
}

export default LocationData