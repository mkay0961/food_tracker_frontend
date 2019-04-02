import React from 'react';
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import RecipeContainer from './RecipeContainer'
import { connect } from 'react-redux'

const RecipesPage = () => (
 <div>
    <Navbar />
    welcome to recipes page
    <SearchBar />
    <h1>advanced search button</h1>
    <RecipeContainer />
 </div>
);


export default (RecipesPage);
