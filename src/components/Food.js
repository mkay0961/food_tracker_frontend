import React from 'react';

const Food = (props) => (
 <div className="ui card" onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
    {`${props.data.name}`}
    {(props.data.amount)?
      <div>
        stuff
      </div>:null}
 </div>
)

export default Food;
