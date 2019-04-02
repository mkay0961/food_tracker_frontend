import React from 'react';

const Recipe = (props) => (
 <div className="ui card">
    {`${props.data.title}`}
 </div>
);

export default Recipe;
