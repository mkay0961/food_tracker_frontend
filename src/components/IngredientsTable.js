import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'
import IngredientsTableItem from './IngredientsTableItem'

const genItems = (ingredents) => {
  return ingredents.map((food)=>{
      return <IngredientsTableItem data={food}/>
  })

}


const IngredientsTable = (props) => (
 <div >
   <Table celled>
 <Table.Header>
   <Table.Row>
     <Table.HeaderCell>?</Table.HeaderCell>
     <Table.HeaderCell>Name</Table.HeaderCell>
     <Table.HeaderCell>Amount</Table.HeaderCell>
   </Table.Row>
 </Table.Header>

 <Table.Body>
   {genItems(props.food)}
 </Table.Body>
</Table>

 </div>
)

export default (IngredientsTable)
