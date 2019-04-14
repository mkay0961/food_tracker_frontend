import React from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { throwAwayFood } from '../redux/actions/user'

const throwAway = (props) => {
  props.data.specific_instances.forEach((item)=>{
    props.throwAwayFood(item.user_food_id)
  })
}

const Food = (props) => (
 <Card onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
      {`${props.data.name}`}
      {props.data.to_be_eaten?props.data.to_be_eaten:props.data.combined_amount}
      {props.data.expired? <button onClick={()=>{throwAway(props)}}>Throw Away</button>: ""}
 </Card>
)
const mapDispatchToProps = dispatch => {
  return {
    throwAwayFood: (id)=>{dispatch(throwAwayFood(id))},
  }
}

export default connect(null, mapDispatchToProps)(Food)
