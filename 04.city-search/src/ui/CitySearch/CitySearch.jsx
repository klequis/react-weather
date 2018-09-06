import React from 'react'

class CitySearch extends React.Component {
  state = {
    city: ''
  }
  cityChange = (city) => {
    console.log('cityChange: city', city)
    this.setState({
      city: city,
    })
  }

  goClick = () => {
    const { city } = this.state
    if (city.length > 2) {
      console.log('go get the data for: ', this.state.city)
    }

  }

  render() {
    return (
      <div>
        <input
          placeholder="enter city"
          onChange={(event) => this.cityChange(event.target.value)}
        />
        <button
          onClick={this.goClick}
        >
          Go
        </button>
      </div>
    )
  }
}

export default CitySearch