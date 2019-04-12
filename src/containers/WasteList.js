import React from 'react'
import WasteListItem from '../components/WasteListItem'


const genWasteItems = (list) => {
  return list.map((item, i)=>{
    return <WasteListItem key={i} data={item}/>
  })
}


const WasteList = (props) => (
 <div className="ui cards">
      {`You wasted ${props.totalWasted} items this month`}
      {genWasteItems(props.food)}
 </div>
)

export default (WasteList)
