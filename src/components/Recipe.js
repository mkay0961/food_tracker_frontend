import React from 'react' 

const Recipe = (props) => (
 <div className="ui card" onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
    {`${props.data.title}`}
 </div>
)

export default Recipe
