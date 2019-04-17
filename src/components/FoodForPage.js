import React from 'react'
import { Item, Button, Header, Divider, Label, Popup, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { throwAwayFood } from '../redux/actions/user'

const throwAway = (props) => {

  props.data.specific_instances.forEach((item)=>{
    props.throwAwayFood(item.user_food_id)
  })
  
}

const genPopUp = (foods) => {

  let col = foods.specific_instances.map((food, i)=>{
    return <Grid.Column textAlign='center'>
      <Header as='h4'>{foods.name}</Header>
        <p>Price:{food.price}</p>
        <p>Amount:{food.amount}</p>
        <p>Expiration Date:{food.expiration_date}</p>
    </Grid.Column>
  })

  return [<Grid centered divided columns={foods.specific_instances.length}>
            {col}
          </Grid>]
}


const FoodForPage = (props) => (
    <Popup wide='very' trigger={<div className="outloneLightGrey">
        <Item>
           <Item.Image className="shrinkImage" src={`${props.data.image}`} />
           <Item.Content>
             <Item.Header>{`${props.data.name}`}</Item.Header>
             <Divider />
             <Item.Meta>
               <Label color="orange">{`${props.data.combined_amount}`}</Label>
             </Item.Meta>
             {props.data.expired? <Button onClick={()=>throwAway(props)}>Throw Away</Button>:null}
           </Item.Content>
         </Item>
    </div>}>{genPopUp(props.data)}</Popup>
)
const mapDispatchToProps = dispatch => {
  return {
    throwAwayFood: (id)=>{dispatch(throwAwayFood(id))},
  }
}

export default connect(null, mapDispatchToProps)(FoodForPage)
