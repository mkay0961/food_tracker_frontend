import React, {Component} from 'react';
import { Header, Modal, Button } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import DetailAddModal from './DetailAddModal'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import {clearSearch} from '../redux/actions/searchBar'
import {addFoodsBackend} from '../redux/actions/user'
import {setShowModal, resetShowModal,setDetailShowModal, setCurretModal} from '../redux/actions/modal'
import {addFoodList,delFoodList,emptyList} from '../redux/actions/food'

//make funtional?

class AddModal extends Component {

  //move to redux

  // constructor(){
  //   super()
  //   this.state = {
  //     active: false,
  //     detailsActive: false,
  //     current: null
  //   }
  // }
  componentDidMount(){
    console.log("mount add");
  }

  open = () => {
    console.log("lkjhkljh");
    this.props.setShowModal()
  }

  close = () => {

    const {resetShowModal, emptyList, clearSearch, addFoodList} = this.props

    clearSearch()
    resetShowModal()

    if(addFoodList.length !== 0){
      emptyList()
    }

  }

  handleSubmit = () => {

    const {addFoodList, clearSearch, addFoodsBackend} = this.props

    clearSearch()

    if(addFoodList.length !== 0){
      addFoodsBackend()
    }
    this.close()

  }

  // checkDeatails(foodDetails){
  //   console.log("h", foodDetails["amount"].split(" ").length === 2);
  //   let amount = foodDetails["amount"].split(" ")
  //
  //   if(amount.length === 2){
  //     return true
  //   //   this.props.userFoods.forEach((food)=>{
  //   //     if(food.name === foodDetails.name && ){
  //   //       console.log("found");
  //   //     }else{
  //   //       console.log("not found");
  //   //     }
  //   //   })
  //   // }else{
  //   //   return false
  //   }else{
  //     return false
  //   }
  //
  // // }
  // handleDetailsClose2 = (e) => {
  //   e.preventDefault()
  //   this.setState({detailsActive: false})
  //  }
  //
  // handleDetailsClose = (e, foodDetails) => {
  //   e.preventDefault()
  //   let amount = e.target.parentElement.children[0].children[1].value
  //   let price = e.target.parentElement.children[1].children[1].value
  //   let expire_date = e.target.parentElement.children[2].children[1].value
  //   if (amount !== "" && price !== "" && expire_date !== "") {
  //     foodDetails["price"] = price
  //     foodDetails["expired"] = false
  //     foodDetails["amount"] = amount
  //     foodDetails["expiration_date"] = expire_date
  //     foodDetails["active"] = true
  //     if(this.checkDeatails(foodDetails)){
  //       this.props.resetShowModal()
  //       // this.setState({detailsActive: false})
  //       this.props.addFood(foodDetails)
  //     }
  //   }else{
  //     alert("You Enter all Information")
  //   }
  // }

  handleAddClick = (item) =>{

    const {setDetailShowModal, setCurretModal} = this.props

    console.log("clicked on item",item);
    setDetailShowModal()
    setCurretModal(item)
    // this.setState({detailsActive: true, current: item})
  }

  handleDelClick = (item) =>{
    const delFood = this.props
    console.log("del item",item);
    delFood(item)
  }

  generateCorrectFoodList = () => {

    const {food, addFoodList, search}  = this.props

    return food.filter((aFood)=>(!addFoodList.includes(aFood) && aFood.name.toLowerCase().includes(search.toLowerCase())))
  }

  render() {

  const {showModal, addFoodList, clearSearch } = this.props

  return (
      <div>
        <Modal dimmer={"blurring"} open={showModal}  onOpen={this.open} onClose={this.close} trigger={<button onClick={clearSearch} className="ui button">Add Food</button>}>
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
                  <FoodContainer food={addFoodList} handleClick={this.handleDelClick}/>
                </div>
              </div>
            </Modal.Description>
            <Modal.Actions>
              <Button icon='check' content='Submit' onClick={this.handleSubmit}/>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
        <DetailAddModal />
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
    setShowModal: ()=>{dispatch(setShowModal())},
    setDetailShowModal: ()=>{dispatch(setDetailShowModal())},
    resetShowModal: ()=>{dispatch(resetShowModal())},
    setCurretModal: (food)=>{dispatch(setCurretModal(food))}
    }
}

const mapStateToProps = state =>({
  food: state.food,
  addFoodList: state.addFoodList,
  search: state.search,
  showModal: state.modal.showModal,
  userFoods: state.user.foods,
  showDetailModal: state.modal.showDetailModal
})

export default connect(mapStateToProps, mapDispatchToProps)(AddModal)
