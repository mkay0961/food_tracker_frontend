import React from 'react'
import { Card } from 'semantic-ui-react'

const Note = (props) => (
 <Card>
      {props.data.food_data.name}
 </Card>
)

export default (Note)
