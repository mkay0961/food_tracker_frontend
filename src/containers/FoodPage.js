import React, {Component} from 'react';
import CategoriesContainer from './CategoriesContainer'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'

class FoodPage extends Component {

  handleAddModalSubmit = () =>{
    console.log("ADDD ALL THESE DAMN FOOD");
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <AddModal handleAdd={this.handleAddModalSubmit}/>
        <EatModal />
        <CategoriesContainer />
      </div>
    );
  }
}

export default (FoodPage);
