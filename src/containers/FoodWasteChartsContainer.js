import React from 'react'
import Chart from '../components/Chart'
import { connect } from 'react-redux'

const capFirstLetter = (month) =>{
  return month.charAt(0).toUpperCase() + month.slice(1)
}
const lowerFirstLetter = (month) =>{
  return month.charAt(0).toLowerCase() + month.slice(1)
}

const generateYearData = (stats) => {
    let rtnArray=[]
    let obj = {}
    let obj2 = {}
    let months = Object.keys(stats)
    months.forEach((month)=>{
      obj[`${capFirstLetter(month)}`] = stats[lowerFirstLetter(month)]["wasted"].length
      obj2[`${capFirstLetter(month)}`] = stats[lowerFirstLetter(month)]["total"]
    })
    rtnArray.push(obj)
    rtnArray.push(obj2)
  return rtnArray
}


const generateAllWasted = (stats) => {
  let rtnArray=[]
  let obj = {}
  let date = new Date()
  let month = Object.keys(stats)[date.getMonth()]
  stats[month]["wasted"].forEach((food)=>{
      if(obj[food.food_data.name]){
        obj[food.food_data.name] += 1
      }else{
        obj[food.food_data.name] = 1
      }
  })
  rtnArray.push(obj)
  return rtnArray
}

const FoodWasteChartsContainer = (props) => (
<div>
  <div>
    Food Wasted Over A Year
    <Chart  data={generateYearData(props.stats)} />
   </div>
   <div>
    Items Wasted This Month
    <Chart data={generateAllWasted(props.stats)} />
   </div>
</div>
)

const mapStateToProps = state =>({
  stats: state.user.stats
})

export default connect(mapStateToProps, null)(FoodWasteChartsContainer)
