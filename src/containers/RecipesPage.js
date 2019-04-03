import React from 'react';
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AdvancedModal from '../components/AdvancedModal'
import RecipeContainer from './RecipeContainer'

const test = () =>{
  debugger
}


const RecipesPage = () => (
 <div>
    <Navbar />
    <SearchBar />
    <AdvancedModal/>
    <button onClick={test} className="ui button">Advanced Search</button>
    <RecipeContainer />
 </div>
);


export default (RecipesPage);
