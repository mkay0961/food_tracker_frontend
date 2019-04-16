import React from 'react'
import { Item } from 'semantic-ui-react'

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

export default (Food)
