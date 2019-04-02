import React from 'react';
import Navbar from '../components/Navbar'
import RecipeContainer from './RecipeContainer'
import { connect } from 'react-redux'

const RecipesPage = () => (
 <div>
    <Navbar />
    welcome to recipes page
    <RecipeContainer />
 </div>
);


export default (RecipesPage);
