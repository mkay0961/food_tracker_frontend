import React from 'react';

const Food = (props) => (
 <div className="ui card">
    {`${props.data.name}`}
 </div>
);

export default Food;
