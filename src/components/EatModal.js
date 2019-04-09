import React, { Component } from 'react'
import { Header, Modal, Button } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import DetailEatModal from './DetailEatModal'
import { addFoodList, delFoodList, emptyList } from '../redux/actions/food'
import { clearSearch } from '../redux/actions/searchBar'
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
    //logic
    //work on
    let eatenAmount = e.target.parentElement.children[0].children[1].value.split(" ")
    let oldAmount = item.amount.split(" ")
    if(oldAmount[0]- eatenAmount[0]>= 0 && eatenAmount.length === 2){
      let newItem = {...item}
      newItem.amount = eatenAmount.join(" ")
      this.props.addFood(newItem)
      this.setState({eatDetailModalActive: false, currentModal:null})
    }else {
      alert("stop")
      e.preventDefault()
    }

  }

  handleCancel= (e) =>{
    e.preventDefault()
    this.setState({eatDetailModalActive: false, currentModal:null})
  }

  handleEatClick = (item) =>{
    this.setState({eatDetailModalActive: true, currentEatModal: item})
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
        <Modal dimmer={"blurring"}
               open={eatModalActive}
               onOpen={this.open}
               onClose={this.close}
               trigger={<button className="ui button">Eat Food</button>}>
          <Modal.Header>Eat Food</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>stuff</Header>
              <div className="row">
                <div className="column">
                  <Header>My Food</Header>
                  <SearchBar />
                  <div className="scrollable">
                    <FoodContainer food={this.generateFood()}
                                   handleClick={this.handleEatClick} />
                  </div>
                </div>
                <div className="column">
                    <Header>Food To Eat</Header>
                    <div className = "scrollable">
                      <FoodContainer food={addFoodList}
                                     handleClick={this.handleDelClick}/>
                    </div>
                </div>
              </div>
              <Button icon='check' content='Submit' onClick={this.handleSubmit}/>
            </Modal.Description>
          </Modal.Content>
        </Modal>
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
    eatFoodsBackend: ()=>{dispatch(eatFoodsBackend())}
    }
}

const mapStateToProps = state =>({
  foods: state.user.foods,
  addFoodList: state.addFoodList,
  search: state.search
})

export default connect(mapStateToProps, mapDispatchToProps)(EatModal)
