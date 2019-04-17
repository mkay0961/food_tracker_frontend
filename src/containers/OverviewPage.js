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
      <div className="backImage2">
        <Grid columns={2} className="gridMove" >
          <Grid.Row stretched align="center">
              <Grid.Column>

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
                <Grid.Column>
                  <div>
                    <Calendar />
                  </div>
                </Grid.Column>
              </Grid.Row>
          </Grid>
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








// <Grid divided='vertically'className="backImage2" >
//     <Grid.Row align="center" columns={1}>
//       <Grid.Column >
//         <Profile />
//       </Grid.Column>
//     </Grid.Row>
//     <Grid.Row align="center" columns={1}>
//       <Grid.Column >
//         <div className="buttonsGroup outlineOrange2">
//           <AddModal />
//           <EatModal />
//         </div>
//       </Grid.Column>
//     </Grid.Row>
//     <Grid.Row  align="center" columns={2}>
//       <Grid.Column>
//         <Calendar />
//       </Grid.Column>
//       <Grid.Column>
//         <SavedRecipesContainer handleClick={this.handleShowModal} />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>





// <Grid columns={2} divided className="backImage2">
// <Grid.Row stretched>
//     <Grid.Column>
//         <div><Profile /></div>
//         <div><div className="buttonsGroup outlineOrange2">
//                   <AddModal />
//                   <EatModal />
//                 </div></div>
//         <div>    <SavedRecipesContainer handleClick={this.handleShowModal} /></div>
//       </Grid.Column>
//       <Grid.Column>
//         <div><Calendar />
//         </div>
//       </Grid.Column>
//     </Grid.Row>
//</Grid>






// <Profile />
// <Segment className="buttonsGroup">
//   <AddModal />
//   <EatModal />
// </Segment>
// <SavedRecipesContainer handleClick={this.handleShowModal} />
// <Calendar />
// <RecipeModal data={current} active={showModal} noShow={this.handleNoShowModal} />
