import React from 'react';
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'

const RecipeContainer = () => (
 <div>
    welcome to container page

 </div>
);

const mapStateToProps = state =>({
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeContainer);
