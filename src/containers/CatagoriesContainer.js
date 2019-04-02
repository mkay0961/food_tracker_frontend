import React from 'react';
import Catagory from './Catagory'

const generateCatagories = () =>{
  return ["cat1","cat2", "cat3"]
}

const CatagoriesContainer = (props) => (
 <div>
    {generateCatagories().map((cat)=>{
      return <Catagory name={cat}/>
    })}
 </div>
);

export default CatagoriesContainer;
