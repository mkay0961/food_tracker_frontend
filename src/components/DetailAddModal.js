import React, { Component } from 'react'
import { Header, Modal, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addFoodList } from '../redux/actions/food'

class DetailAddModal extends Component {

  render() {

    const { status, data, handleUpdate, handleCancel, onChangeForm, amount } = this.props

    return (
      <div>
      <Modal open={status}>
        <Modal.Header>Adding Food</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Item: {data.name}</Header>
            <Form size='large'>

              <Form.Input fluid
                          name="amount"
                          onChange={(e)=>onChangeForm(e)}
                          value={amount}
                          placeholder='Amount'
                          type='number'
                          pattern='[0-9]{0,5}'
                          label={`Amount   **Unit(${data.unit})**`} />

              <Form.Input fluid
                          onChange={(e)=>onChangeForm(e)}
                          name="price"
                          placeholder='$00.00'
                          type="number" min="1" step="any"
                          label="Price" />

              <Form.Input fluid
                          onChange={(e)=>onChangeForm(e)}
                          name="expire_date"
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



// <Transition visible={status} animation='scale' duration={300}>
//   </Transition>
