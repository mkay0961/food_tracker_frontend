import React, {Component} from 'react'
import { Header, Modal, Button, Transition, Grid, Divider, Icon, Segment } from 'semantic-ui-react'
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
    let amount = e.target.parentElement.children[0].children[1].value
    let price = e.target.parentElement.children[1].children[1].value
    let expire_date = e.target.parentElement.children[2].children[1].value

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
    // if(searchFilteredArray.length === 0){
    //   console.log("ADD somthing");
    // }
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
                    size="large"
                    className="addeatmodal"
                    onClose={this.close}
                    >
          <Modal.Header as="h1">Add Food</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
                <Grid columns={2} textAlign='center'>
                  <Divider vertical><Icon name="arrow right"/></Divider>
                  <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                      <Header icon>
                        All Food
                      </Header>
                      <Segment>
                        <SearchBar />
                      </Segment>
                      <div className="column">
                        <FoodContainer food={this.generateFood()}
                                       handleClick={this.handleAddClick}/>
                      </div>
                     </Grid.Column>
                    <Grid.Column>
                      <Header icon>
                        Food To Add
                      </Header>
                      <div className = "column">
                        <FoodContainer food={addFoodList}
                                       handleClick={this.handleDelClick}/>
                       </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>


            </Modal.Description>
          </Modal.Content>
          <Button icon='check' content='Submit' onClick={this.handleSubmit}/>
        </Modal>
        </Transition>

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
