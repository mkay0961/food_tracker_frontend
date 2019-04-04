import React, {Component} from 'react';
import { Modal } from 'semantic-ui-react'




class RecipeModal extends Component {

  render() {

  return (
      <div>
        <Modal open={this.props.active} onClose={this.props.noShow}>
          YEEET
        </Modal>
      </div>
      )
    }
}


export default (RecipeModal)
