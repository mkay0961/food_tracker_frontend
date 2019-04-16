import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import FoodWasteChartsContainer from './FoodWasteChartsContainer'

class StatsPage extends Component {

  render() {

    return (
      <div>
        <Navbar/>
        <FoodWasteChartsContainer />

      </div>
    )
  }
}

export default (StatsPage)
