import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import AddEatenBtns from '../components/AddEatenBtns';
import NotesContainer from './NotesContainer';
import SavedRecipesContainer from './SavedRecipesContainer';

class OverviewPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
        <div className="ui card">
          <AddEatenBtns />
        </div>
        <NotesContainer />
        <SavedRecipesContainer />
      </div>
    );
  }
}

export default OverviewPage;
