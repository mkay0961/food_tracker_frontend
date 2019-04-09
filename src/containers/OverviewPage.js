import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import NotesContainer from './NotesContainer'
import SavedRecipesContainer from './SavedRecipesContainer'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import { clearSearch } from '../redux/actions/searchBar'
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
    this.props.clearSearch()
  }

  render() {
    const { current, showModal } = this.state
    const { location } = this.props

    return (
      <div>
        <Navbar/>
        <Profile />
        <div className="ui card">
          <AddModal />
          <EatModal />
        </div>
        <NotesContainer />
        <SavedRecipesContainer handleClick={this.handleShowModal} />
        <RecipeModal data={current} active={showModal} noShow={this.handleNoShowModal} />

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: ()=>{dispatch(clearSearch())}
  }
}

export default connect(null, mapDispatchToProps)(OverviewPage)
