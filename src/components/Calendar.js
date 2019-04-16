import React from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = BigCalendar.momentLocalizer(moment)

const genAllFood = (food) => {
  let allFoodArray = []
  Object.keys(food).forEach((cat)=>{
    food[cat].forEach((food)=>{
      food["specific_instances"].forEach((spec)=>{
        allFoodArray.push({name: `${food["name"]} Expires`, date: moment(spec["expiration_date"]) , allday: true})
      })
    })
  })
  return allFoodArray
}

const Calendar = (props) => (
   <div className="calendar">
     <BigCalendar
      localizer={localizer}
      events={genAllFood(props.food)}
      titleAccessor ="name"
      startAccessor= "date"
      allDayAccessor="allday"
      resourceAccessor="name"
      endAccessor= "date"
    />
   </div>
)

const mapStateToProps = state =>({
  food: state.user.foods
})

export default connect(mapStateToProps, null)(Calendar)
