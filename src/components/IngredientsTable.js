import React from 'react'
import { Table } from 'semantic-ui-react'
import IngredientsTableItem from './IngredientsTableItem'

const genItems = (ingredents) => {
  
  return ingredents.map((food)=>{
      return <IngredientsTableItem data={food}/>
  })

}

const IngredientsTable = (props) => (
 <div >
   <Table celled collapsing inverted color="orange" className="outlinegrey">
     <Table.Header>
       <Table.Row active >
         <Table.HeaderCell>Do you have it?</Table.HeaderCell>
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
