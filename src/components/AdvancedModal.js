import React from 'react';
import { Modal } from 'semantic-ui-react'

const AdvancedModal = (props) => (
  <div>
    <Modal trigger={<button className="ui button">Advanced Search</button>}>
      <Modal.Header>Advanced Search</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <form className="ui form">
            <div className="field">
              <label>First Name</label>
              <input type="text" name="first-name" placeholder="First Name"/>
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name"/>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>

);

export default (AdvancedModal)
