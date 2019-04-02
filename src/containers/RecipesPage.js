import React from 'react';
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import RecipeContainer from './RecipeContainer'
import { connect } from 'react-redux'

const RecipesPage = () => (
 <div>
    <Navbar />
    <SearchBar />
    <button className="ui button">Advanced Search</button>
    <RecipeContainer />
 </div>
);


export default (RecipesPage);
