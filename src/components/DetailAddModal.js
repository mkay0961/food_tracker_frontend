import React, { Component } from 'react'
import { Header, Modal, Button, Form } from 'semantic-ui-react'
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
            <Form size='large'>

              <Form.Input fluid
                          name="amount"
                          placeholder='Amount'
                          label={`Amount   **Unit(${data.unit})**`} />

              <Form.Input fluid
                          name="price"
                          placeholder='$00.00'
                          label="Price" />

              <Form.Input fluid
                          name="exp_date"
                          type="date"
                          label="Expiration Date" />

              <Button className="ui button"
                      onClick={(e)=>handleUpdate(e,data)}>Add</Button>
              <Button className="ui button"
                      onClick={(e)=>handleCancel(e)}>Cancel</Button>
            </Form>
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
