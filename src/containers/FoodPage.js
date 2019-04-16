import React, { Component } from 'react'
import CategoriesContainer from './CategoriesContainer'
import SearchPageBar from '../components/SearchPageBar'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'
import { Segment, Grid, Image } from 'semantic-ui-react'

class FoodPage extends Component {

  componentDidMount(){
    this.props.clearSearchPage()
  }

  render() {
    return (
      <div>
        <Segment>
          <Grid divided='vertically' >
              <Grid.Row align="center" columns={1}>
                <Grid.Column >
                  <Segment className="group">
                    <div className="barr">
                      <SearchPageBar/>
                    </div>
                    <Segment className="buttonsGroup">
                      <AddModal/>
                      <EatModal/>
                    </Segment>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row  align="center" columns={2}>
                <Grid.Column>
                   <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                   <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row  align="center" columns={2}>
                <Grid.Column>
                   <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                   <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
      </Segment>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSearchPage: ()=>{dispatch(clearSearchPage())}
  }
}

const mapStateToProps = state =>({
  nonExpired: state.user.foods.nonExpired,
  expired: state.user.foods.expired
})
export default connect(mapStateToProps, mapDispatchToProps)(FoodPage)

// <Segment className="group">
//   <div className="barr">
//     <SearchPageBar/>
//   </div>
//   <Segment className="buttonsGroup">
//     <AddModal/>
//     <EatModal/>
//   </Segment>
// </Segment>
// <h1>Not Expired</h1>
// <div className="catagory scrollable">
//   <CategoriesContainer name={"Not Expired"} foods={this.props.nonExpired}/>
// </div>
// <Divider section />
// <h1>Expired</h1>
// <div className="catagory scrollable">
//   <CategoriesContainer name={"Expired"} foods={this.props.expired}/>
// </div>
