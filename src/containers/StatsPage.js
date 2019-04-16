import React, { Component } from 'react'
import FoodWasteChartsContainer from './FoodWasteChartsContainer'
import { Segment } from 'semantic-ui-react'

//function

class StatsPage extends Component {

  render() {
    return (
      <div>
        <Segment>
          <FoodWasteChartsContainer />
        </Segment>
      </div>
    )
  }
}

export default (StatsPage)
