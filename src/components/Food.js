import React from 'react'
import { Card, Item, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { throwAwayFood } from '../redux/actions/user'

// const throwAway = (props) => {
//   props.data.specific_instances.forEach((item)=>{
//     props.throwAwayFood(item.user_food_id)
//   })
// }

const Food = (props) => (
  <div className="ui card test2" onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
    <Item>
         <Item.Image src='' />
         <Item.Content>
           <Item.Header>{`${props.data.name}`}</Item.Header>
           <Item.Meta>
             {props.data.to_be_eaten?props.data.to_be_eaten:props.data.combined_amount}
           </Item.Meta>
           <Item.Description>{props.data.expiration_date?props.data.expiration_date:""}</Item.Description>
         </Item.Content>
       </Item>
    </div>
)
// const mapDispatchToProps = dispatch => {
//   return {
//     throwAwayFood: (id)=>{dispatch(throwAwayFood(id))},
//   }
// }

export default (Food)
