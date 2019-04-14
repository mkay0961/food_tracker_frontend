import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import AllNotes from './AllNotes'
import SavedRecipesContainer from './SavedRecipesContainer'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import Calendar from '../components/Calendar'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'
import RecipeModal from '../components/RecipeModal'


class OverviewPage extends Component {

  constructor(){
    super()
    this.state = {
      showModal: false,
      current: null
    }
  }

  handleShowModal = (data) => {
    console.log(data)
    this.setState({showModal: true, current: data})
  }
  handleNoShowModal = () => {
    this.setState({showModal: false, current: null})
  }

  componentDidMount(){
    this.props.clearSearchPage()
  }

  render() {
    const { current, showModal } = this.state

    return (
      <div>
        <Navbar/>
        <Profile />
        <div className="buttonsGroup">
          <AddModal />
          <EatModal />
        </div>
        <Calendar />
        <SavedRecipesContainer handleClick={this.handleShowModal} />
        <RecipeModal data={current} active={showModal} noShow={this.handleNoShowModal} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSearchPage: ()=>{dispatch(clearSearchPage())}
  }
}

export default connect(null, mapDispatchToProps)(OverviewPage)
