import React, {Component} from 'react';
import CategoriesContainer from './CategoriesContainer'
import Navbar from '../components/Navbar'
import AddEatenBtns from '../components/AddEatenBtns'
import SearchBar from '../components/SearchBar'

class FoodPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <AddEatenBtns />
        <CategoriesContainer />
      </div>
    );
  }
}

export default (FoodPage);
