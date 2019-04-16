import React, { Component } from 'react'
import { Header, Modal, Form, Button } from 'semantic-ui-react'

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
            <Form className="ui form">
              <Form.Input fluid
                          name="amount"
                          defaultValue={data.combined_amount.split(" ")[0]}
                          placeholder='Amount'
                          label={`Amount   **Unit(${data.unit})**`} />
              <Button className="ui button" onClick={(e)=>handleUpdate(e, data)}>Eat</Button>
              <Button className="ui button" onClick={(e)=>handleCancel(e)}>Cancel</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </div>
    )
  }
}

export default (DetailEatModal)
