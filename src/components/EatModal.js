import React, { Component } from 'react'
import { Header, Modal, Button, Segment, Grid, Transition } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import DetailEatModal from './DetailEatModal'
import { addFoodList, delFoodList, emptyList } from '../redux/actions/food'
import { clearSearch } from '../redux/actions/searchBar'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { eatFoodsBackend } from '../redux/actions/user'



class EatModal extends Component {
  constructor(){
    super()
    this.state = {
      eatModalActive: false,
      currentEatModal: null,
      eatDetailModalActive: false
    }
  }

  open = () =>{
    this.props.clearSearchPage()
    this.setState({eatModalActive: true})
  }

  close = () =>{

    const { clearSearch, addFoodList, emptyList} = this.props

    this.setState({eatModalActive: false})
    clearSearch()
    if(addFoodList.length !== 0){
      emptyList()
    }
  }

  handleUpdate = (e, item) =>{
    let eatenAmount = e.target.form.children[0].children[1].children[0].value
    let oldAmount = item.combined_amount.split(" ")

    if(oldAmount[0]- eatenAmount >= 0 && eatenAmount !== "" && eatenAmount.split(" ").length === 1){
      let newItem = {...item}
      newItem["to_be_eaten"] = eatenAmount + " " + oldAmount[1]
      this.props.addFood(newItem)
      this.setState({eatDetailModalActive: false, currentModal:null})
    }else {
      alert("stop")
      e.preventDefault()
    }

    //FIX TO MAKE ERRORS BETTER

  }

  handleCancel= (e) =>{
    e.preventDefault()
    this.setState({ eatDetailModalActive: false, currentModal:null })
  }

  handleEatClick = (item) =>{
    this.setState({ eatDetailModalActive: true, currentEatModal: item })
  }

  handleDelClick = (item) =>{
    this.props.delFood(item)
  }

  handleSubmit = () =>{
    const { addFoodList, eatFoodsBackend } = this.props

    if(addFoodList.length !== 0){
      eatFoodsBackend()
    }
    this.close()
  }

  generateFood = () => {
    const { addFoodList, foods, search } = this.props

    let ids = addFoodList.map((food)=>food.food_id)
    let searchFilteredArray = foods.filter((aFood)=>(aFood.name.toLowerCase().includes(search.toLowerCase())))
    return searchFilteredArray.filter((aFood)=>!(ids).includes(aFood.food_id))
  }

  render() {
    const { addFoodList } = this.props
    const { eatDetailModalActive, currentEatModal, eatModalActive } = this.state

    return (
      <div>
        <button onClick={this.open} className="ui button">Eat Food</button>
        <Transition visible={eatModalActive} animation='scale' duration={300}>
        <Modal dimmer={"blurring"}
               open={eatModalActive}
               onOpen={this.open}
               className="modalCustom"
               onClose={this.close}
               >
          <Modal.Header as="h1">Eat Food</Modal.Header>
          <Modal.Content>
            <Grid stackable columns={2}>
              <Grid.Column>
                <Segment >
                  <Header icon>
                         My Food
                   </Header>
                   <Segment align="center">
                     <SearchBar />
                   </Segment>
                   <div >
                     <FoodContainer food={this.generateFood()}
                           handleClick={this.handleEatClick} />
                   </div>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header icon>
                          Food To Eat
                  </Header>
                  <div >
                    <FoodContainer food={addFoodList}
                       handleClick={this.handleDelClick}/>
                  </div>
                </Segment>
                <Segment align="center">
                  <Button icon='check' content='Submit' onClick={this.handleSubmit}/>
                </Segment>
              </Grid.Column>
            </Grid>

          </Modal.Content>

        </Modal>
        </Transition>
        {!this.state.currentEatModal? null:
            <DetailEatModal handleCancel={this.handleCancel}
                            handleUpdate={this.handleUpdate}
                            status={eatDetailModalActive}
                            data={currentEatModal} />}

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: (food)=>{dispatch(addFoodList(food))},
    delFood: (food)=>{dispatch(delFoodList(food))},
    emptyList: ()=>{dispatch(emptyList())},
    clearSearch: ()=>{dispatch(clearSearch())},
    clearSearchPage: ()=>{dispatch(clearSearchPage())},
    eatFoodsBackend: ()=>{dispatch(eatFoodsBackend())}
    }
}

const mapStateToProps = state =>({
  foods: state.user.foods.nonExpired,
  addFoodList: state.addFoodList,
  search: state.search
})

export default connect(mapStateToProps, mapDispatchToProps)(EatModal)


//
// <Grid columns={2} textAlign='center'>
//   <Divider vertical><Icon name="arrow right"/></Divider>
//   <Grid.Row verticalAlign='middle'>
//     <Grid.Column>
//       <Header icon>
//         My Food
//       </Header>
//       <Segment>
//         <SearchBar />
//       </Segment>
//       <div className="scrollable">
//         <FoodContainer food={this.generateFood()}
//               handleClick={this.handleEatClick} />
//       </div>
//
//      </Grid.Column>
//     <Grid.Column>
//       <Header icon>
//         Food To Eat
//       </Header>
//       <div >
//         <FoodContainer food={addFoodList}
//            handleClick={this.handleDelClick}/>
//       </div>
//     </Grid.Column>
//
//   </Grid.Row>
//   <Grid.Row >
//     <Grid.Column>
//     <div>
//       <Button icon='check' content='Submit' onClick={this.handleSubmit}/>
//     </div>
//   </Grid.Column>
//   </Grid.Row>
//
// </Grid>
