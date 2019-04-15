import React from 'react'
import { Header, Table, Rating, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

const checkIfHave = (data, userFoods) =>{
    let rtnVal = false

    let useFoodIds = userFoods.map((food)=>{
      return food.food_id
    })

    // recipe.food.forEach((data)=>{
    //   // userFoods.forEach((userFood)=>{
    //
    //   // console.log(recipeFood.name);
    if(useFoodIds.includes(data.food_id)){
      if(parseInt(data.amount.split(" ")[0]) <= parseInt(userFoods.find((food)=>food.food_id === data.food_id).combined_amount.split(" ")[0])){
        rtnVal = true
      }else{
        rtnVal = false
      }


    }else{

      rtnVal = false

    }


    return rtnVal
}

const IngredientsTableItem = (props) => (
   <Table.Row>
     <Table.Cell>
        {checkIfHave(props.data, props.userFoods)?
          <Icon color='green' name='checkmark' size='large' />
          :
          <Icon color='red' name='close' size='large' />
        }
     </Table.Cell>
     <Table.Cell>
         {props.data.name}
     </Table.Cell>
     <Table.Cell>
         {props.data.amount}
     </Table.Cell>
   </Table.Row>
)

const mapStateToProps = state =>({
  userFoods: state.user.foods.nonExpired
})

export default connect(mapStateToProps, null)(IngredientsTableItem)
