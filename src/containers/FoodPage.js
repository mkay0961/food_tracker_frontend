import React from 'react';
import CatagoriesContainer from './CatagoriesContainer'
import Navbar from '../components/Navbar'

const FoodPage = () => (
 <div>
    welcome to food page
    <Navbar />
    <h1>search bar</h1>
    <h1>AddEaten buttons bar</h1>
    <CatagoriesContainer catagories={["c1","c2","c3"]}/>
 </div>
);

export default FoodPage;
