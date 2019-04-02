import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import ProfileContainer from './ProfileContainer';
import NotesContainer from './NotesContainer';
import SavedRecipesContainer from './SavedRecipesContainer';

class OverviewPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProfileContainer />
        <NotesContainer />
        <SavedRecipesContainer />
      </div>
    );
  }
}

export default OverviewPage;
