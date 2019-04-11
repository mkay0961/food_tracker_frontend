import React from 'react'
import { Header, Modal } from 'semantic-ui-react'


const NewRecipeModal = (props) => (
  <div>
  <Modal dimmer={"blurring"} trigger={<button className="ui button">Add Recipe</button>}>>
    <Modal.Header>New Recipe</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header></Header>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="amount" defaultValue="{data.amount}"/>
          </div>
          <button className="ui button" onClick={null}>Add</button>
        </form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
 </div>
)

export default (NewRecipeModal)
