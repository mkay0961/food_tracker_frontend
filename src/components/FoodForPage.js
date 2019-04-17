import React from 'react'
import { Card, Item, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { throwAwayFood } from '../redux/actions/user'

const throwAway = (props) => {
  props.data.specific_instances.forEach((item)=>{
    props.throwAwayFood(item.user_food_id)
  })
}

const FoodForPage = (props) => (
    <div className="">
        <Item>
           <Item.Image className="shrinkImage" src={`${props.data.image}`} />
           <Item.Content>
             <Item.Header>{`${props.data.name}`}</Item.Header>
             <Item.Meta>
               {`${props.data.combined_amount}`}
             </Item.Meta>
             {props.data.expired? <Button onClick={()=>throwAway(props)}>Throw Away</Button>:null}
           </Item.Content>
         </Item>
    </div>
)
const mapDispatchToProps = dispatch => {
  return {
    throwAwayFood: (id)=>{dispatch(throwAwayFood(id))},
  }
}

export default connect(null, mapDispatchToProps)(FoodForPage)
