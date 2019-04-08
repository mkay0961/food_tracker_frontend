import React,{Component} from 'react';
import { Header, Modal } from 'semantic-ui-react'

//make funtional?

class DetailEatModal extends Component {

  componentDidMount(){
    console.log("mount detail eat");
  }

  render() {

    return (
      <div>
      <Modal dimmer={"blurring"} open={this.props.status} >
        <Modal.Header>Eat Food</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Item: {this.props.data.name}</Header>
            <form className="ui form">
              <div className="field">
                <label>Amount</label>
                <input type="text" name="amount" defaultValue={this.props.data.amount}/>
              </div>
              <button className="ui button" onClick={(e)=>this.props.handleUpdate(e, this.props.data)}>Update</button>
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
