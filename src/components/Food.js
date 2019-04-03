import React from 'react';


const Food = (props) => (
 <div className="ui card" onClick={()=>props.handleClick(props.data)}>
    {`${props.data.name}`}
 </div>
)

export default Food;
