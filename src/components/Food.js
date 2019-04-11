import React from 'react'
import { Card } from 'semantic-ui-react'

const Food = (props) => (
 <Card onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
      {`${props.data.name}`}
      {props.data.to_be_eaten?props.data.to_be_eaten:props.data.combined_amount}
 </Card>
)

export default (Food)
