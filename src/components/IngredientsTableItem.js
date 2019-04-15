import React from 'react'
import { Header, Table, Rating, Icon } from 'semantic-ui-react'

const IngredientsTableItem = (props) => (
   <Table.Row>
     <Table.Cell>
        <Icon color='green' name='checkmark' size='large' />
     </Table.Cell>
     <Table.Cell>
         {props.data.name}
     </Table.Cell>
     <Table.Cell>
         {props.data.amount}
     </Table.Cell>
   </Table.Row>
)

export default (IngredientsTableItem)
