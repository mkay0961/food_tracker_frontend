import React, { Component } from 'react'
import { Header, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addFoodList } from '../redux/actions/food'

class DetailAddModal extends Component {

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
                <label>{data.unit}</label>
              </div>
              <div className="field">
                <label>Price</label>
                <input type="text" name="price" placeholder="$00.00"/>
              </div>
              <div className="field">
                <label>Expiration Date</label>
                <input type="date" name="exp_date" defaultValue={null}/>
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

export default connect(null, mapDispatchToProps)( DetailAddModal )
