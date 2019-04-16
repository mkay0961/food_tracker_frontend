import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import FoodWasteChartsContainer from './FoodWasteChartsContainer'
import { Segment } from 'semantic-ui-react'


class StatsPage extends Component {

  render() {

    return (
      <div>
        <Navbar/>
        <Segment>
          <FoodWasteChartsContainer />
        </Segment>
      </div>
    )
  }
}

export default (StatsPage)
