import React, {Component} from 'react'
import { Header, Modal, Button } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import DetailAddModal from './DetailAddModal'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import { clearSearch } from '../redux/actions/searchBar'
import { addFoodsBackend } from '../redux/actions/user'
import { addFoodList, delFoodList, emptyList } from '../redux/actions/food'

class AddModal extends Component {
  constructor(){
    super()
    this.state = {
      addModalActive: false,
      currentAddModal: null,
      AddDetailModalActive: false
    }
  }

  open = () =>{
    this.setState({ addModalActive: true })
  }

  close = () =>{
    const { clearSearch, addFoodList, emptyList } = this.props

    this.setState({ addModalActive: false })
    clearSearch()
    if(addFoodList.length !== 0){
      emptyList()
    }
  }

  handleUpdate = (e, item) =>{
    //logic
    //work on
    e.preventDefault()
    let amount = e.target.parentElement.children[0].children[1].value
    let price = e.target.parentElement.children[1].children[1].value
    let expire_date = e.target.parentElement.children[2].children[1].value
    let amountSplit = amount.split(" ")

    if (amountSplit.length === 2 && !isNaN(amountSplit[0]) && isNaN(amountSplit[1])) {
      console.log("works")
      let newItem = {...item}
      newItem["amount"] = amount
      newItem["price"] = price
      newItem["expire_date"] = expire_date
      this.props.addFood(newItem)
      this.setState({addDetailModalActive: false, currentAddModal:null})
    }else {
      alert("wrong amount")
    }

  }

  handleCancel= (e) =>{
    e.preventDefault()
    this.setState({addDetailModalActive: false, currentAddModal:null})
  }

  handleAddClick = (item) =>{
    this.setState({addDetailModalActive: true, currentAddModal: item})
  }

  handleDelClick = (item) =>{
    this.props.delFood(item)
  }

  handleSubmit = () =>{
    const { addFoodList, addFoodsBackend } = this.props

    if(addFoodList.length !== 0){
      addFoodsBackend()
    }
    this.close()
  }

  generateFood = () => {
    const { addFoodList, food, search } = this.props

    let ids = addFoodList.map((food)=>food.id)
    let searchFilteredArray = food.filter((aFood)=>(aFood.name.toLowerCase().includes(search.toLowerCase())))
    return searchFilteredArray.filter((aFood)=>!(ids).includes(aFood.id))
  }

  render() {

  const { addModalActive, addDetailModalActive, currentAddModal } = this.state
  const { addFoodList } = this.props

  return (
      <div>
        <Modal dimmer={"blurring"}
               open={addModalActive}
               onOpen={this.open}
               onClose={this.close}
               trigger={<button className="ui button">Add Food</button>}>
          <Modal.Header>Add Food</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <div className="row">
                <div className="column">
                  <Header>All Food</Header>
                  <SearchBar />
                  <FoodContainer food={this.generateFood()}
                                 handleClick={this.handleAddClick}/>
                </div>
                <div className="column">
                  <Header>Food To Add</Header>
                  <FoodContainer food={addFoodList}
                                 handleClick={this.handleDelClick}/>
                </div>
              </div>
            </Modal.Description>
            <Modal.Actions>
              <Button icon='check' content='Submit' onClick={this.handleSubmit}/>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
        {!currentAddModal?null:
          <DetailAddModal handleCancel={this.handleCancel}
                          handleUpdate={this.handleUpdate}
                          status={addDetailModalActive}
                          data={currentAddModal} />}
      </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: (food)=>{dispatch(addFoodList(food))},
    delFood: (food)=>{dispatch(delFoodList(food))},
    addFoodsBackend: ()=>{dispatch(addFoodsBackend())},
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
