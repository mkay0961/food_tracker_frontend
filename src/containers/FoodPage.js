import React, { Component } from 'react'
import FoodPageFoodContainer from './FoodPageFoodContainer'
import SearchPageBar from '../components/SearchPageBar'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'
import { Segment, Tab, Header, Label, Icon } from 'semantic-ui-react'
import Navbar from '../components/Navbar'

class FoodPage extends Component {

  componentDidMount(){
    this.props.clearSearchPage()
  }

  genProperNonExpiredFood(num){
    let array2 = []
    if(num === 0){
      let obj ={}

      this.props.nonExpired.forEach((food, i)=>{
          if(!Object.keys(obj).includes(food.category)){
              obj[food.category]= [food]
          }else{
            obj[food.category].push(food)
          }

      })

      Object.keys(obj).forEach((cat, i)=>{
        console.log("test2",obj[cat]);
        array2.push({ menuItem: cat, render: () => <Tab.Pane><FoodPageFoodContainer foods={obj[cat]}/></Tab.Pane> })
      })

    }else if(num === 1){
      let obj ={}

      this.props.expired.forEach((food, i)=>{
        if(!Object.keys(obj).includes(food.category)){
            obj[food.category]= [food]
        }else{
          obj[food.category].push(food)
        }
      })


      Object.keys(obj).forEach((cat, i)=>{
        array2.push({ menuItem: cat, render: () => <Tab.Pane><FoodPageFoodContainer foods={obj[cat]}/></Tab.Pane> })
      })

    }
    return array2
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="buttonsGroup ">
          <SearchPageBar/>
          <Segment className="buttonsGroup ">
            <AddModal />
            <EatModal />
          </Segment>
        </div>

        <div className="foodGroup outlineOrange">
          <Label icon="trash" size="massive"><Header><Icon name='food' />Non Expired</Header></Label>
          <Tab panes={this.genProperNonExpiredFood(0)} />
        </div>

        <div className="foodGroup outlineOrange">
          <Label size="massive" ><Header><Icon name='trash' />Expired</Header></Label>
          <Tab panes={this.genProperNonExpiredFood(1)} />
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

const mapStateToProps = state =>({
  nonExpired: state.user.foods.nonExpired,
  expired: state.user.foods.expired
})

export default connect(mapStateToProps, mapDispatchToProps)(FoodPage)
