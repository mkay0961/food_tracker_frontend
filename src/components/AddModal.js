import React, {Component} from 'react'
import { Header, Modal, Button, Transition, Grid, Segment, Label } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import DetailAddModal from './DetailAddModal'
import FoodContainer from '../containers/FoodContainer'
import { connect } from 'react-redux'
import { clearSearch } from '../redux/actions/searchBar'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { addFoodsBackend } from '../redux/actions/user'
import { addFoodList, delFoodList, emptyList } from '../redux/actions/food'
import Swal from 'sweetalert2'

class AddModal extends Component {
  constructor(){
    super()
    this.state = {
      addModalActive: false,
      currentAddModal: null,
      addDetailModalActive: false,
      amount: "",
      price: "",
      expire_date: "",
      index: 25
    }
  }

  onChangeForm = (event) => {
    let value = event.target.value
    let name = event.target.name

    this.setState({
      [name]: value
    })
  }

  open = () =>{
    this.props.clearSearchPage()
    this.setState({ addModalActive: true })
  }

  close = () =>{
    const { clearSearch, addFoodList, emptyList } = this.props

    this.setState({ addModalActive: false, index: 25 })
    clearSearch()
    if(addFoodList.length !== 0){
      emptyList()
    }
  }

  handleUpdate = (e, item) =>{
    e.preventDefault()
    const { amount, price } = this.state

    let expire_date = this.state.expire_date

    let errorMess = ""

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
    }else{
      if(amount === "") {
        errorMess += "**Please enter an amount**\n"
      }
      if(price === "") {
        errorMess += "**Please enter a price**\n"
      }
      Swal.fire({
          position: 'top',
          type: 'error',
          title: errorMess,
          animation: true,
          showConfirmButton: false,
          timer: 1000
        })
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

    return searchFilteredArray.filter((food, i)=>(i<this.state.index ))

  }

  moreSpaces = (e, length) => {
    if((this.state.index <= length) && (e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) <= 0){
      this.setState({
          index: this.state.index + 25
      })
    }
   }


  render() {

  const { addModalActive, addDetailModalActive, currentAddModal } = this.state
  const { addFoodList, food } = this.props

  return (
      <div>
        <Button size="massive" onClick={this.open} className="ui button">Add Food</Button>
          <Transition visible={addModalActive} animation='scale' duration={300}>
          <Modal
                 open={addModalActive}
                 onOpen={this.open}
                 className="modalCustom"
                 onClose={this.close}>

            <Modal.Header>
              <Label inverted size="massive" color="orange">
                Add Food
              </Label>
            </Modal.Header>

            <Modal.Content>
              <Grid stackable columns={2}>
                <Grid.Column>
                  <div className="outlineOrange2">
                    <Header icon>
                           All Food
                     </Header>
                     <Segment align="center">
                       <SearchBar />
                     </Segment>
                     <div onScroll={(e)=>this.moreSpaces(e, food.length)}>
                      <FoodContainer food={this.generateFood()}
                                        handleClick={this.handleAddClick}/>
                     </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="outlineOrange2">
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
                </div>
                </Grid.Column>
              </Grid>
            </Modal.Content>
          </Modal>
          </Transition>
        {!currentAddModal?null:
          <DetailAddModal handleCancel={this.handleCancel}
                          handleUpdate={this.handleUpdate}
                          onHandleChange={this.onHandleChange}
                          onChangeForm={this.onChangeForm}
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
