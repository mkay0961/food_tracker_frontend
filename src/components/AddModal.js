import React, {Component} from 'react';
import { Header, Modal, Button } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import DetailAddModal from './DetailAddModal'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import {clearSearch} from '../redux/actions/searchBar'
import { addFoodsBackend } from '../redux/actions/user'
import { setShowModal, resetShowModal, setDetailShowModal, setCurretModal } from '../redux/actions/modal'
import { addFoodList, delFoodList, emptyList } from '../redux/actions/food'

//make funtional?
//deconstruct
class AddModal extends Component {
  constructor(){
    super()
    this.state = {
      addModalActive: false,
      currentAddModal: null,
      AddDetailModalActive: false
    }
  }

  // constructor(){
  //   super()
  //   this.state = {
  //     active: false,
  //     detailsActive: false,
  //     current: null
  //   }
  // }
  // componentDidMount(){
  //   console.log("mount add");
  // }

  open = () =>{
    this.setState({addModalActive: true})
  }

  close = () =>{
    this.setState({addModalActive: false})
    this.props.clearSearch()
    if(this.props.addFoodList.length !== 0){
      this.props.emptyList()
    }
  }

  handleUpdate = (e, item) =>{
    //logic
    e.preventDefault()
    let amount = e.target.parentElement.children[0].children[1].value
    let price = e.target.parentElement.children[1].children[1].value
    let expire_date = e.target.parentElement.children[2].children[1].value
    debugger
  }

  handleCancel= (e) =>{
    e.preventDefault()
    this.setState({addDetailModalActive: false, currentAddModal:null})
    debugger
  }

  handleAddClick = (item) =>{
    this.setState({addDetailModalActive: true, currentAddModal: item})
  }

  handleDelClick = (item) =>{
    this.props.delFood(item)
    debugger
  }

  handleSubmit = () =>{

    if(this.props.addFoodList.length !== 0){
      this.props.addFoodsBackend()
    }
    this.close()
    debugger
  }

  // handleSubmit = () => {
  //
  //   const {addFoodList, clearSearch, addFoodsBackend} = this.props
  //
  //   clearSearch()
  //
  //   if(addFoodList.length !== 0){
  //     addFoodsBackend()
  //   }
  //   this.close()
  //
  // }

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
  //
  // handleAddClick = (item) =>{
  //
  //   const {setDetailShowModal, setCurretModal} = this.props
  //
  //   console.log("clicked on item",item);
  //   setDetailShowModal()
  //   setCurretModal(item)
  //   // this.setState({detailsActive: true, current: item})
  // }
  //
  // handleDelClick = (item) =>{
  //   const delFood = this.props
  //   console.log("del item",item);
  //   delFood(item)
  // }
  //
  generateFood = () => {

    return this.props.food.filter((aFood)=>(!this.props.addFoodList.includes(aFood) && aFood.name.toLowerCase().includes(this.props.search.toLowerCase())))

    // return this.props.food
  }

  render() {

  // const {showModal, addFoodList, clearSearch } = this.props

  return (
      <div>
        <Modal dimmer={"blurring"} open={this.state.addModalActive}  onOpen={this.open} onClose={this.close} trigger={<button className="ui button">Add Food</button>}>
          <Modal.Header>Add Food</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <div className="row">
                <div className="column">
                  <Header>All Food</Header>
                  <SearchBar />
                  <FoodContainer food={this.generateFood()} handleClick={this.handleAddClick}/>
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
        {!this.state.currentAddModal?null:
          <DetailAddModal handleCancel={this.handleCancel}
                          handleUpdate={this.handleUpdate}
                          status={this.state.addDetailModalActive}
                          data={this.state.currentAddModal} />}
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
    clearSearch: ()=>{dispatch(clearSearch())}
    }
}

const mapStateToProps = state =>({
  food: state.food,
  addFoodList: state.addFoodList,
  search: state.search,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddModal)
