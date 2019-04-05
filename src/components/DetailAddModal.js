import React from 'react';
import { Header, Modal } from 'semantic-ui-react'

const DetailAddModal = (props) => (
  <div>
  <Modal dimmer={"blur"} open={props.detailsActive} >
    <Modal.Header>Adding Food</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Item: {(props.item)?props.item.name:null}</Header>
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
            <input type="text" name="exp_date" defaultValue={(props.item)?props.item.default_expiration:null}/>
          </div>
          <button className="ui button" onClick={(e)=>props.handleDetailsClose(e,props.item)}>Update</button>
          <button className="ui button" onClick={(e)=>props.handleDetailsClose2(e)}>Cancel</button>
        </form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  </div>
);

export default DetailAddModal;
