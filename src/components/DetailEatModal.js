import React,{Component} from 'react';
import { Header, Modal } from 'semantic-ui-react'

//make funtional?

class DetailEatModal extends Component {

  render() {

    const {status, data} = this.props

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
                <input type="text" name="amount" defaultValue={data.amount}/>
              </div>
              <button className="ui button" onClick={(e)=>this.props.handleUpdate(e, data)}>Eat</button>
              <button className="ui button" onClick={(e)=>this.props.handleCancel(e)}>Cancel</button>
            </form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </div>
    );
  }
}

export default (DetailEatModal)
