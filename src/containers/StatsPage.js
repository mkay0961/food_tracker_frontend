import React, { Component } from 'react'
import FoodWasteChartsContainer from './FoodWasteChartsContainer'
import { Segment } from 'semantic-ui-react'
import Navbar from '../components/Navbar'


class StatsPage extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Segment>
          <FoodWasteChartsContainer />
        </Segment>
      </div>
    )
  }
}

export default (StatsPage)
