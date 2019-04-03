import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import NotesContainer from './NotesContainer';
import SavedRecipesContainer from './SavedRecipesContainer';
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'

class OverviewPage extends Component {
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

export default OverviewPage;
