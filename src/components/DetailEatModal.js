import React, { Component } from 'react'
import { Header, Modal } from 'semantic-ui-react'

//make funtional?

class DetailEatModal extends Component {

  render() {

    const { status, data, handleUpdate, handleCancel} = this.props

    return (
      <div>
      <Modal dimmer={"blurring"} open={status} >
        <Modal.Header>Eat Food</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Item: {data.name}</Header>
            <form className="ui form">
              <div className="field">
                <label>Amount</label>
                <input type="text" name="amount" defaultValue={data.combined_amount.split(" ")[0]}/>
                <label>{data.unit}</label>
              </div>
              <button className="ui button" onClick={(e)=>handleUpdate(e, data)}>Eat</button>
              <button className="ui button" onClick={(e)=>handleCancel(e)}>Cancel</button>
            </form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </div>
    )
  }
}

export default (DetailEatModal)
