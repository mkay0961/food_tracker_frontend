import React, {Component} from 'react';
import { Header, Modal, Button } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import DetailAddModal from './DetailAddModal'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import {addFoodList,delFoodList,addFoodsBackend} from '../redux/actions/food'


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
    // if(this.props.addFoodList.length !== 0){
    //   this.props.addFoodsBackend()
    // }
  }

  handleDetailsClose = (foodDetails) => {
    this.setState({detailsActive: false})
    console.log("deatails output" ,foodDetails);
  }

  handleAddClick = (item) =>{
    console.log("clicked on item",item);
    this.setState({detailsActive: true, current: item})

    // this.props.addFood(item)
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
        <DetailAddModal item={this.state.current} handleDetailsClose={this.handleDetailsClose} detailsActive={this.state.detailsActive} />
      </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: (food)=>{dispatch(addFoodList(food))},
    delFood: (food)=>{dispatch(delFoodList(food))},
    addFoodsBackend: (food)=>{dispatch(addFoodsBackend())}
  }
}

const mapStateToProps = state =>({
  food: state.food,
  addFoodList: state.addFoodList
})

export default connect(mapStateToProps, mapDispatchToProps)(AddModal)
