import React, {Component} from 'react';
import { Header, Modal, Button } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import DetailAddModal from './DetailAddModal'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import {addFoodsBackend} from '../redux/actions/user'
import {addFoodList,delFoodList,emptyList} from '../redux/actions/food'


class AddModal extends Component {
  constructor(){
    super()
    this.state = {
      active: false,
      detailsActive: false,
      current: null
    }
  }

  open = () => this.setState({ active: true })

  close = () => this.setState({ active: false })

  handleSubmit = () => {
    this.close()
    if(this.props.addFoodList.length !== 0){
      console.log(this.props.addFoodList);
      this.props.addFoodsBackend(this.props.addFoodList)
    }
    this.props.emptyList()

  }

  handleDetailsClose = (e, foodDetails) => {
    this.setState({detailsActive: false})

    let amount = e.target.parentElement.children[0].children[1].value
    let price = e.target.parentElement.children[1].children[1].value
    let expire_date = e.target.parentElement.children[2].children[1].value
    if (amount !== "" && price !== "" && expire_date !== "") {
      foodDetails["Price"] = price
      foodDetails["Expired"] = false
      foodDetails["Amount"] = amount
      foodDetails["Expiration_date"] = expire_date
      foodDetails["Active"] = true
      this.props.addFood(foodDetails)
      console.log("deatails output" ,foodDetails, e);
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
    return this.props.food.filter((food)=>{
        if(!this.props.addFoodList.includes(food)){
          return food
        }
      })
  }

  render() {

  const { active, detailsActive } = this.state

  return (
      <div>
        <Modal open={active}  onOpen={this.open} onClose={this.close} trigger={<button className="ui button">Add Food</button>}>
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
        <DetailAddModal item={this.state.current} handleDetailsClose={this.handleDetailsClose} detailsActive={detailsActive} />
      </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: (food)=>{dispatch(addFoodList(food))},
    delFood: (food)=>{dispatch(delFoodList(food))},
    addFoodsBackend: (food)=>{dispatch(addFoodsBackend(food))},
    emptyList: ()=>{dispatch(emptyList())}
  }
}

const mapStateToProps = state =>({
  food: state.food,
  addFoodList: state.addFoodList
})

export default connect(mapStateToProps, mapDispatchToProps)(AddModal)
