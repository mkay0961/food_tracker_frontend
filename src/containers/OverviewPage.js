import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import NotesContainer from './NotesContainer';
import SavedRecipesContainer from './SavedRecipesContainer';
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import {clearSearch} from '../redux/actions/searchBar'
import { connect } from 'react-redux'


class OverviewPage extends Component {

  componentDidMount(){
    this.props.clearSearch()
  }

  render() {
    return (
      <div>
        <Navbar path={this.props.location.pathname}/>
        <Profile />
        <div className="ui card">
          <AddModal />
          <EatModal />
        </div>
        <NotesContainer />
        <SavedRecipesContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: ()=>{dispatch(clearSearch())}
  }
}

export default connect(null, mapDispatchToProps)(OverviewPage)
