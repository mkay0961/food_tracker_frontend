import React, {Component} from 'react';
import CategoriesContainer from './CategoriesContainer'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'

class FoodPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <AddModal />
        <EatModal />
        <CategoriesContainer />
      </div>
    );
  }
}

export default (FoodPage);
