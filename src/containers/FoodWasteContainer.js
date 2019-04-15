import React, { Component } from 'react'
import WasteList from './WasteList'
import { connect } from 'react-redux'

class FoodWasteContainer extends Component {

  getThisMonthStats = () => {
    let date = new Date()
    let stats = this.props.stats
    let month = Object.keys(stats)[date.getMonth()]
    let thisMonthStats = stats[month]
    return thisMonthStats

  }

  startOfWeek = (date) =>{
    let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
    return new Date(date.setDate(diff))

  }

  endOfWeek = (date) =>{
    let lastday = date.getDate() - (date.getDay() - 1) + 6
    return new Date(date.setDate(lastday))
  }

  genMonthWasted = () =>{
    let stats = this.getThisMonthStats()
    return stats["wasted"]
  }

  genWeekWasted = () =>{
    let stats = this.getThisMonthStats()
    let date = new Date()
    let start = this.startOfWeek(date)
    let end = this.endOfWeek(date)
    let rtnArray = []
    stats["wasted"].forEach((stat)=>{
      let dayOfMonth = stat["specifc_data"]["expiration_date"].split("-")[2]
      if(dayOfMonth >= start.getUTCDate() && dayOfMonth <= end.getUTCDate() ){
        rtnArray.push(stat)
      }
    })
    return rtnArray
  }

  getMonthTotal = () =>{
    let stats = this.getThisMonthStats()
    return stats["wasted"].length
  }

  getWeekTotal = () =>{
    let count = 0
    let date = new Date()
    let start = this.startOfWeek(date)
    let end = this.endOfWeek(date)
    let stats = this.getThisMonthStats()
    stats["wasted"].forEach((stat)=>{
      let dayOfMonth = stat["specifc_data"]["expiration_date"].split("-")[2]
      if(dayOfMonth >= start.getUTCDate() && dayOfMonth <= end.getUTCDate() ){
        count +=1
      }
    })
    return count
  }


  render() {
    return (
      <div>
        <div>
          Food Wasted this month
          <WasteList totalWasted={this.getMonthTotal()} food={this.genMonthWasted()} />
        </div>
        <div>
          Food Wasted this week
          <WasteList totalWasted={this.getWeekTotal()} food={this.genWeekWasted()} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  stats: state.user.stats
})

export default connect(mapStateToProps, null)(FoodWasteContainer)
