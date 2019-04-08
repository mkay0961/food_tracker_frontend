import React, {Component} from 'react';
import { Header, Modal, Button } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import DetailAddModal from './DetailAddModal'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import {clearSearch} from '../redux/actions/searchBar'
import {addFoodsBackend} from '../redux/actions/user'
import {setShowModal} from '../redux/actions/modal'
import {addFoodList,delFoodList,emptyList} from '../redux/actions/food'


class AddModal extends Component {

  //move to redux

  constructor(){
    super()
    this.state = {
      active: false,
      detailsActive: false,
      current: null
    }
  }

  open = () => {
      this.props.setShowModal()
      this.setState({ active: true })
  }

  close = () => {
    this.setState({ active: false })
    this.props.emptyList()
  }

  handleSubmit = () => {
    let addFoodList = this.props.addFoodList
    this.close()
    if(addFoodList.length !== 0){
      this.props.addFoodsBackend(addFoodList)
    }
    this.props.emptyList()
  }

  checkDeatails(foodDetails){
    console.log("h", foodDetails["amount"].split(" ").length === 2);
    let amount = foodDetails["amount"].split(" ")

    if(amount.length === 2){
      return true
    //   this.props.userFoods.forEach((food)=>{
    //     if(food.name === foodDetails.name && ){
    //       console.log("found");
    //     }else{
    //       console.log("not found");
    //     }
    //   })
    // }else{
    //   return false
    }else{
      return false
    }

  }
  handleDetailsClose2 = (e) => {
    e.preventDefault()
    this.setState({detailsActive: false})
  }

  handleDetailsClose = (e, foodDetails) => {
    e.preventDefault()
    let amount = e.target.parentElement.children[0].children[1].value
    let price = e.target.parentElement.children[1].children[1].value
    let expire_date = e.target.parentElement.children[2].children[1].value
    if (amount !== "" && price !== "" && expire_date !== "") {
      foodDetails["price"] = price
      foodDetails["expired"] = false
      foodDetails["amount"] = amount
      foodDetails["expiration_date"] = expire_date
      foodDetails["active"] = true
      if(this.checkDeatails(foodDetails)){
        this.setState({detailsActive: false})
        this.props.addFood(foodDetails)
      }
    }else{
      alert("You Enter all Information")
    }
  }

  handleAddClick = (item) =>{
    console.log("clicked on item",item);
    this.setState({detailsActive: true, current: item})
  }

  handleDelClick = (item) =>{
    console.log("del item",item);
    this.props.delFood(item)
  }

  generateCorrectFoodList = () => {
    //fix filter
    return this.props.food.filter((food)=>{
        if(!this.props.addFoodList.includes(food) && food.name.toLowerCase().includes(this.props.search.toLowerCase())){
          return food
        }
      })
  }

  render() {

  const { active, detailsActive } = this.state

  return (
      <div>
        <Modal dimmer={"blurring"} open={active}  onOpen={this.open} onClose={this.close} trigger={<button onClick={this.props.clearSearch} className="ui button">Add Food</button>}>
          <Modal.Header>Add Food</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <div className="row">
                <div className="column">
                  <Header>All Food</Header>
                  <SearchBar />
                  <FoodContainer food={this.generateCorrectFoodList()} handleClick={this.handleAddClick}/>
                </div>
                <div className="column">
                  <Header>Food To Add</Header>
                  <FoodContainer food={this.props.addFoodList} handleClick={this.handleDelClick}/>
                </div>
              </div>
            </Modal.Description>
            <Modal.Actions>
              <Button icon='check' content='Submit' onClick={this.handleSubmit}/>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
        <DetailAddModal item={this.state.current} handleDetailsClose2={this.handleDetailsClose2} handleDetailsClose={this.handleDetailsClose} detailsActive={detailsActive} />
      </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: (food)=>{dispatch(addFoodList(food))},
    delFood: (food)=>{dispatch(delFoodList(food))},
    addFoodsBackend: (food)=>{dispatch(addFoodsBackend(food))},
    emptyList: ()=>{dispatch(emptyList())},
    clearSearch: ()=>{dispatch(clearSearch())},
    setShowModal: ()=>{dispatch(setShowModal())}
    }
}

const mapStateToProps = state =>({
  food: state.food,
  addFoodList: state.addFoodList,
  search: state.search,
  userFoods: state.user.foods
})

export default connect(mapStateToProps, mapDispatchToProps)(AddModal)
