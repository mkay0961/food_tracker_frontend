import React, {Component} from 'react';
import CategoriesContainer from './CategoriesContainer'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'

class FoodPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>search bar</h1>
        <h1>AddEaten buttons bar</h1>
        <CategoriesContainer />
      </div>
    );
  }
}

export default (FoodPage);
