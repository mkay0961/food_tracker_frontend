import React from 'react'
import { Card } from 'semantic-ui-react'

const Food = (props) => (
 <Card onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
      {`${props.data.name}`}
      {props.data.amount?props.data.amount:null}
 </Card>
)

export default (Food)
