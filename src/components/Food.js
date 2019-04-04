import React from 'react';


const Food = (props) => (
 <div className="ui card" onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
    {`${props.data.name}`}
 </div>
)

export default Food;
