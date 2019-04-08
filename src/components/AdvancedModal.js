import React from 'react';
import { Modal } from 'semantic-ui-react'

const AdvancedModal = (props) => (
  <div>
    <Modal dimmer={"blurring"} trigger={<button className="ui button">Advanced Search</button>}>
      <Modal.Header>Advanced Search</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <form className="ui form">
            <div className="field">
              <label>Show recipes by ingredients</label>
              <input type="checkbox" name="ingredients" placeholder="ingredients"/>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>

);

export default (AdvancedModal)
