import React, { Component } from 'react'
import { Header, Modal, Button, Segment, Grid, Transition, Label } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import DetailEatModal from './DetailEatModal'
import { addFoodList, delFoodList, emptyList } from '../redux/actions/food'
import { clearSearch } from '../redux/actions/searchBar'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { eatFoodsBackend } from '../redux/actions/user'
import Swal from 'sweetalert2'

class EatModal extends Component {
  constructor(){
    super()
    this.state = {
      eatModalActive: false,
      currentEatModal: null,
      eatDetailModalActive: false,
      index: 25
    }
  }

  open = () =>{
    this.props.clearSearchPage()
    this.setState({eatModalActive: true})
  }

  close = () =>{

    const { clearSearch, addFoodList, emptyList} = this.props

    this.setState({ eatModalActive: false, index: 25 })
    clearSearch()
    if(addFoodList.length !== 0){
      emptyList()
    }
  }

  handleUpdate = (e, item) =>{
    let eatenAmount = document.getElementById("eatenAmount").value
    let oldAmount = item.combined_amount.split(" ")

    let errorMess = ""

    if(oldAmount[0]- eatenAmount >= 0 && eatenAmount !== "" && eatenAmount.split(" ").length === 1){
      let newItem = {...item}
      newItem["to_be_eaten"] = eatenAmount + " " + oldAmount[1]
      this.props.addFood(newItem)
      this.setState({eatDetailModalActive: false, currentModal:null})
    }else {

      if(eatenAmount === "" ){
        errorMess += "**Please enter an amount**\n"
      }
      if(oldAmount[0]- eatenAmount < 0){
        errorMess += "**You cant eat more than you have**\n"
      }
      if(eatenAmount.split(" ").length !== 1){
        errorMess += "**Please only enter a number**\n"
      }

      Swal.fire({
          position: 'top',
          type: 'error',
          title: errorMess,
          animation: true,
          showConfirmButton: false,
          timer: 1000
        })


      e.preventDefault()
    }


  }

  handleCancel= (e) =>{
    e.preventDefault()
    this.setState({ eatDetailModalActive: false, currentModal: null })
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
    searchFilteredArray = searchFilteredArray.filter((aFood)=>!(ids).includes(aFood.food_id))
    return searchFilteredArray.filter((food, i)=>(i<this.state.index))
  }

  moreSpaces = (e, length) => {
    if((this.state.index <= length) && (e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) <= 0){
      this.setState({
          index: this.state.index + 25
      })
    }
   }

  render() {
    const { addFoodList, foods } = this.props
    const { eatDetailModalActive, currentEatModal, eatModalActive } = this.state

    return (
      <div>
        <Button size="massive" onClick={this.open} className="ui button">Eat Food</Button>
        <Transition visible={eatModalActive} animation='scale' duration={300}>
        <Modal
               open={eatModalActive}
               onOpen={this.open}
               className="modalCustom"
               onClose={this.close}
               >
          <Modal.Header><Label inverted size="massive" color="orange">Eat Food</Label></Modal.Header>
          <Modal.Content>
            <Grid stackable columns={2}>
              <Grid.Column>
                <div className="outlineOrange2">
                  <Header icon>
                         My Food
                   </Header>
                   <Segment align="center">
                     <SearchBar />
                   </Segment>
                   <div onScroll={(e)=>this.moreSpaces(e, foods.length)}>
                     <FoodContainer food={this.generateFood()}
                           handleClick={this.handleEatClick}/>
                   </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="outlineOrange2">
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
              </div>
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
