import React from 'react'
import { Card, Segment } from 'semantic-ui-react'

const Recipe = (props) => (
 <Card onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
    {`${props.data.title}`}
 </Card>
)

export default Recipe
