import React from 'react';


const Food = (props) => (
 <div className="ui card">
    {`${props.data.name}`}
    {props.buttonClick? <button>Delete</button>: null}
 </div>
)

export default Food;
