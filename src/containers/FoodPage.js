import React, { Component } from 'react'
import FoodPageFoodContainer from './FoodPageFoodContainer'
import SearchPageBar from '../components/SearchPageBar'
import AddModal from '../components/AddModal'
import EatModal from '../components/EatModal'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'
import { Segment, Grid, Image, Tab, Header, Label, Icon } from 'semantic-ui-react'

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
    console.log("skdajhflkh", array2);
    // this.props.nonExpired.forEach(()=>{
    //
    //
    //
    // })

    // console.log("skdajhflkh", allcat);
    //
    //
    // let rtnVal = this.props.nonExpired
    // if(num === 0){
    //   rtnVal = this.props.nonExpired.filter((food, i)=>{
    //     console.log(food.category);
    //     if(food.category === "Freezer" || food.category === "Produce" || food.category === "Dairy & Eggs"  || food.category === "Breakfast"){
    //       return food
    //      }
    //   })
    // }else if(num === 1){
    //   rtnVal = this.props.nonExpired.filter((food, i)=>{
    //     console.log(food.category);
    //     if(food.category === "Pantry" || food.category === "Dry Goods & Pasta" || food.category === "Canned Goods" || food.category === "Snacks" ){
    //       return food
    //     }
    //   })
    // }
    return array2
  }

  render() {
    return (
      <div>

        <div className="buttonsGroup outlineOrange2">

          <SearchPageBar/>
      
            <Segment className="buttonsGroup">
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
// <Grid columns={2} divided >
//     <Grid.Row align="center" columns={1}>
//       <Grid.Column >
//         <Segment className="group">
//           <div className="barr">
//             <SearchPageBar/>
//           </div>
//           <Segment className="buttonsGroup">
//             <AddModal/>
//             <EatModal/>
//           </Segment>
//         </Segment>
//       </Grid.Column>
//     </Grid.Row>
//     <Grid.Row stretched>
// <Grid.Column >

// <h1>Not Expired</h1>
// <div className="catagory scrollable">
// <CategoriesContainer name={"Not Expired"} foods={this.genProperNonExpiredFood(4)}/>
// </div>
//
// </Grid.Column>
// <Grid.Column>
// <Segment>
// <h1>Expired</h1>
// <div className="catagory scrollable">
// <CategoriesContainer name={"Expired"} foods={this.props.expired}/>
// </div>
// </Segment>
// </Grid.Column>
//
// </Grid.Row>
//   </Grid>
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
