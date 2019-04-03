import React from 'react';
import { Header, Modal } from 'semantic-ui-react'

const AdvancedModal = (props) => (
  <div>
    <Modal trigger={<button className="ui button">Advanced Search</button>}>
      <Modal.Header>Advanced Search</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>stuff</Header>
          <form className="ui form">
            <div className="field">
              <label>First Name</label>
              <input type="text" name="first-name" placeholder="First Name"/>
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name"/>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden"/>
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>

);

export default AdvancedModal;

// //
// <Modal trigger={props.button}>
//   <Modal.Header>Advanced Search</Modal.Header>
//   <Modal.Content image>
//     <Modal.Description>
//       <Header>stuff</Header>
//     </Modal.Description>
//   </Modal.Content>
// </Modal>