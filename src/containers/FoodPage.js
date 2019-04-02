import React, {Component} from 'react';
import CatagoriesContainer from './CatagoriesContainer'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'

class FoodPage extends Component {

  componentDidMount(){
    console.log("askljdh",this.props);
  }


  render() {
    return (
      <div>
        welcome to food page
        <Navbar />
        <h1>search bar</h1>
        <h1>AddEaten buttons bar</h1>
        <CatagoriesContainer />
      </div>
    );
  }
}
const mapStateToProps = state =>({
  foods: state.user.foods
})

export default connect(mapStateToProps)(FoodPage);
