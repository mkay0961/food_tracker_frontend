import React, {Component} from 'react';
import { Header, Modal } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import DetailEatModal from './DetailEatModal'
import {addFoodList,delFoodList,emptyList} from '../redux/actions/food'
import {setCurretModal,setDetailShowModal} from '../redux/actions/modal'
import {clearSearch} from '../redux/actions/searchBar'


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
    this.setState({eatModalActive: false})
    this.props.clearSearch()
    if(this.props.addFoodList.length !== 0){
      emptyList()
    }
  }

  handleUpdate = (e, item) =>{
    console.log("update", e.target);
    //all update logic
    let eatenAmount = e.target.parentElement.children[0].children[1].value.split(" ")
    let oldAmount = item.amount.split(" ")
    if(oldAmount[0]- eatenAmount[0]>= 0 && eatenAmount.length === 2){
      // let newAmount = `${oldAmount[0] - eatenAmount[0]} ${oldAmount[1]}`
      let newItem = {...item}
      newItem.amount = eatenAmount
      this.props.addFood(newItem)
      // e.preventDefault()
      this.setState({eatDetailModalActive: false, currentModal:null})
    }else {
      alert("stop")
      e.preventDefault()
    }

  }

  handleCancel= (e) =>{
    console.log("cancel", e);
    e.preventDefault()
    this.setState({eatDetailModalActive: false, currentModal:null})
  }

  handleEatClick = (item) =>{
    console.log("hi", item, this.props);
    //bring up detailed menu
    this.setState({eatDetailModalActive: true, currentEatModal: item})
    // this.props.setCurretModal(item)

  }

  handleDelClick = (item) =>{
    console.log("delete me", item);
    this.props.delFood(item)
  }

  handleSubmit = () =>{
    console.log("submit", this.props.addFoodList);
    debugger
  }

  generateFood = () => {
    let ids = this.props.foods.map((food)=>food.id)
    debugger
    let array = this.props.foods.filter((aFood)=>(aFood.name.toLowerCase().includes(this.props.search.toLowerCase())))
    return array.filter((aFood)=>{
      if(!(ids).incudes(aFood.id)){
        return aFood
      }
    })

  }

  render() {
    return (
      <div>
        <Modal dimmer={"blurring"} open={this.state.eatModalActive} onOpen={this.open} onClose={this.close} trigger={<button className="ui button">Eat Food</button>}>
          <Modal.Header>Eat Food</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>stuff</Header>
              <div className="row">
                <div className="column">
                  <Header>My Food</Header>
                  <SearchBar />
                  <div className="scrollable">
                    <FoodContainer food={this.generateFood()}  handleClick={this.handleEatClick} />
                  </div>
                </div>
                <div className="column">
                    <Header>Food To Eat</Header>
                    <div className="scrollable">
                      <FoodContainer food={this.props.addFoodList} handleClick={this.handleDelClick}/>
                    </div>
                </div>
              </div>
              <button onClick={this.handleSubmit} className="ui button" type="submit">Submit</button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        {this.state.currentEatModal?<DetailEatModal handleCancel={this.handleCancel} handleUpdate={this.handleUpdate} status={this.state.eatDetailModalActive} data={this.state.currentEatModal} />: null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: (food)=>{dispatch(addFoodList(food))},
    delFood: (food)=>{dispatch(delFoodList(food))},
    emptyList: ()=>{dispatch(emptyList())},
    clearSearch: ()=>{dispatch(clearSearch())}
    }
}

const mapStateToProps = state =>({
  foods: state.user.foods,
  addFoodList: state.addFoodList,
  search: state.search,
})

export default connect(mapStateToProps, mapDispatchToProps)(EatModal)
