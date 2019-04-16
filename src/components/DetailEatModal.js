import React, { Component } from 'react'
import { Header, Modal, Form, Button, Transition } from 'semantic-ui-react'

class DetailEatModal extends Component {

  render() {

    const { status, data, handleUpdate, handleCancel } = this.props

    return (
      <div>
        <Modal open={status} >
        <Modal.Header>Eat Food</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Item: {data.name}</Header>
            <Form >
              <Form.Input fluid
                          id="eatenAmount"
                          name="eatenAmount"
                          defaultValue={data.combined_amount.split(" ")[0]}
                          placeholder='Amount'
                          type='number'
                          pattern='[0-9]{0,5}'
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


// <Transition visible={status} animation='scale' duration={300}>
//   </Transition>
