import React, { Component } from 'react'
import { Header, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addFoodList } from '../redux/actions/food'


//make funtional?
//deconstruct

class DetailAddModal extends Component {

  // componentDidMount(){
  //   console.log("mount detail add")
  // }
  //
  // checkDeatails(foodDetails){
  //   console.log("h", foodDetails["amount"].split(" ").length === 2)
  //   let amount = foodDetails["amount"].split(" ")
  //
  //   if(amount.length === 2){
  //     return true
  //   //   this.props.userFoods.forEach((food)=>{
  //   //     if(food.name === foodDetails.name && ){
  //   //       console.log("found")
  //   //     }else{
  //   //       console.log("not found")
  //   //     }
  //   //   })
  //   // }else{
  //   //   return false
  //   }else{
  //     return false
  //   }
  //
  // }
  //
  // handleDetailsClose = (e) => {
  //
  //   const {currentModal, resetDetailShowModal,resetCurrentModal, addFood } = this.props
  //
  //   e.preventDefault()
  //   let amount = e.target.parentElement.children[0].children[1].value
  //   let price = e.target.parentElement.children[1].children[1].value
  //   let expire_date = e.target.parentElement.children[2].children[1].value
  //   if (amount !== "" && price !== "" && expire_date !== "") {
  //     currentModal["price"] = price
  //     currentModal["expired"] = false
  //     currentModal["amount"] = amount
  //     currentModal["expiration_date"] = expire_date
  //     currentModal["active"] = true
  //     if(this.checkDeatails(currentModal)){
  //       addFood(currentModal)
  //       resetDetailShowModal()
  //       resetCurrentModal()
  //     }
  //   }else{
  //     alert("You Enter all Information")
  //   }
  // }



  render() {

    const { status, data, handleUpdate, handleCancel } = this.props

    return (
      <div>
      <Modal dimmer={"blurring"} open={status}>
        <Modal.Header>Adding Food</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Item: {data.name}</Header>
            <form className="ui form">
              <div className="field">
                <label>Amount</label>
                <input type="text" name="amount" placeholder="Amount"/>
              </div>
              <div className="field">
                <label>Price</label>
                <input type="text" name="price" placeholder="$00.00"/>
              </div>
              <div className="field">
                <label>Expiration Date</label>
                <input type="text" name="exp_date" defaultValue={data.default_expiration}/>
              </div>
              <button className="ui button" onClick={(e)=>handleUpdate(e,data)}>Add</button>
              <button className="ui button" onClick={(e)=>handleCancel(e)}>Cancel</button>
            </form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: (food)=>{dispatch(addFoodList(food))}
    }
}

// const mapStateToProps = state =>({
//   // showDetailModal: state.modal.showDetailModal,
//   // currentModal: state.modal.currentModal
// })

export default connect(null, mapDispatchToProps)(DetailAddModal)
