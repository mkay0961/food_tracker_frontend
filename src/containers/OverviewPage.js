import React, { Component } from 'react'
import Profile from '../components/Profile'
import SavedRecipesContainer from './SavedRecipesContainer'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import Calendar from '../components/Calendar'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'
import RecipeModal from '../components/RecipeModal'
import { Grid } from 'semantic-ui-react'
import Navbar from '../components/Navbar'



class OverviewPage extends Component {

  constructor(){
    super()
    this.state = {
      showModal: false,
      current: null
    }
  }

  handleShowModal = (data) => {
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
      <Navbar />
      <div className="backImage2">
        <Grid columns={2} className="gridMove" >
          <Grid.Row stretched align="center">
              <Grid.Column className="hack">

                  <div>
                    <Profile />
                  </div>

                  <div>
                    <div className="buttonsGroup outlineOrange2">
                        <AddModal />
                        <EatModal />
                    </div>
                  </div>

                  <div>
                    <SavedRecipesContainer handleClick={this.handleShowModal} />
                  </div>

                </Grid.Column>
                <Grid.Column className="hack2" >
                  <div>
                    <Calendar />
                  </div>
                </Grid.Column>
              </Grid.Row>
          </Grid>
        <RecipeModal data={current} active={showModal} noShow={this.handleNoShowModal} />
      </div>
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
