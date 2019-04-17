import React from 'react'
import { List } from 'semantic-ui-react'

const Recipe = (props) => (
   <List.Item className="listItemRecipe" onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
      <List.Content>
        <List.Header>{`${props.data.title}`}</List.Header>
      </List.Content>
    </List.Item>
)

export default Recipe
