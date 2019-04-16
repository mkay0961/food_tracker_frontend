import React, {Component} from 'react'
import { Header, Modal, Button, Transition, Grid, Segment } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import DetailAddModal from './DetailAddModal'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import { clearSearch } from '../redux/actions/searchBar'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { addFoodsBackend } from '../redux/actions/user'
import { addFoodList, delFoodList, emptyList } from '../redux/actions/food'

class AddModal extends Component {
  constructor(){
    super()
    this.state = {
      addModalActive: false,
      currentAddModal: null,
      addDetailModalActive: false,
      display: false
    }
  }

  open = () =>{
    this.props.clearSearchPage()
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
    e.preventDefault()

    let amount = e.target.form.children[0].children[1].children[0].value
    let price = e.target.form.children[1].children[1].children[0].value
    let expire_date = e.target.form.children[2].children[1].children[0].value

    if(expire_date === ""){
      expire_date = item.default_expiration
    }

    if (!isNaN(amount) && amount !== "" && price !== "" && expire_date !== "" && amount.split(" ").length === 1) {
      let newItem = {...item}
      newItem["amount"] = amount + " " + item.unit
      newItem["price"] = price
      newItem["expire_date"] = expire_date
      this.props.addFood(newItem)
      this.setState({addDetailModalActive: false, currentAddModal:null})
    }else {
      alert("wrong amount")
    }

    //MAKE ERROR MESSAGES BETTER

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

    searchFilteredArray =  searchFilteredArray.filter((aFood)=>!(ids).includes(aFood.id))

    return searchFilteredArray
  }

  render() {

  const { addModalActive, addDetailModalActive, currentAddModal } = this.state
  const { addFoodList } = this.props

  return (
      <div>
        <button onClick={this.open} className="ui button">Add Food</button>
          <Transition visible={addModalActive} animation='scale' duration={300}>
          <Modal dimmer={"blurring"}
                 open={addModalActive}
                 onOpen={this.open}
                 className="modalCustom"
                 onClose={this.close}>
            <Modal.Header as="h1">Add Food</Modal.Header>
            <Modal.Content>
              <Grid stackable columns={2}>
                <Grid.Column>
                  <Segment >
                    <Header icon>
                           All Food
                     </Header>
                     <Segment align="center">
                       <SearchBar />
                     </Segment>
                     <div >
                       <FoodContainer food={this.generateFood()}
                                      handleClick={this.handleAddClick}/>
                     </div>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Header icon>
                            Food To Add
                    </Header>
                    <div >
                      <FoodContainer food={addFoodList}
                                     handleClick={this.handleDelClick}/>
                    </div>
                  </Segment>
                  <Segment align="center">
                    <Button icon='check'
                            content='Submit'
                            onClick={this.handleSubmit}/>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Modal.Content>
          </Modal>
          </Transition>
        {!currentAddModal?null:
          <DetailAddModal handleCancel={this.handleCancel}
                          handleUpdate={this.handleUpdate}
                          onHandleChange={this.onHandleChange}
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
    clearSearch: ()=>{dispatch(clearSearch())},
    clearSearchPage: ()=>{dispatch(clearSearchPage())}

    }
}

const mapStateToProps = state =>({
  food: state.food,
  addFoodList: state.addFoodList,
  search: state.search,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddModal)
