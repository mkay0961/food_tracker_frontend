import React, {Component} from 'react';
import { Modal, Header } from 'semantic-ui-react'
import FoodContainer from '../containers/FoodContainer'

class RecipeModal extends Component {
  render() {
  return (
      <div>
      {!this.props.data?null:
        <Modal open={this.props.active} onClose={this.props.noShow}>
        <Modal.Header>Recipe</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>{this.props.data.title}</Header>
            <h1>{this.props.data.description}</h1>
            <h1>{this.props.data.category}</h1>
            <h1>{this.props.data.instructions}</h1>
            <FoodContainer food={this.props.data.food} />
          </Modal.Description>
        </Modal.Content>
        </Modal>
      }
      </div>

      )
    }
}


export default (RecipeModal)
