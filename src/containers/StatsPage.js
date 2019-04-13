import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import FoodWasteChartsContainer from './FoodWasteChartsContainer'
import { connect } from 'react-redux'

class StatsPage extends Component {
  //
  // processStats = () => {
  // let date = new Date()
  // let stats = this.props.stats
  // let month = Object.keys(stats)[date.getMonth()]
  // let thisMonthStats = stats[month]
  // let numWasted = thisMonthStats["wasted"].length
  // let totalFood = thisMonthStats["total"]
  // return "you wasted " + numWasted + " food items out of " + totalFood + " this month(" + month +")"
  // }

  render() {

    return (
      <div>
        <Navbar/>
        <FoodWasteChartsContainer />

      </div>
    )
  }
}
// <FoodWasteContainer />
// const mapStateToProps = state =>({
//   stats: state.user.stats
// })

export default (StatsPage)
