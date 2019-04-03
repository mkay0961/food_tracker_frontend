import React, {Component} from 'react';
import { Header, Modal, Button } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import FoodContainer from '../containers/FoodContainer'

class AddModal extends Component {
  constructor(){
    super()
    this.state = {
      active: false
    }
  }

  open = () => this.setState({ active: true })

  close = () => this.setState({ active: false })

  handleSubmit = () => {
    this.close()
    this.props.handleAdd()
  }

  render() {

  const { active } = this.state

  return (
      <div>
        <Modal open={active}  onOpen={this.open} onClose={this.close} trigger={<button className="ui button">Add Food</button>}>
          <Modal.Header>Add Food</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <div className="row">
                <div className="column">
                  <Header>All Food</Header>
                  <SearchBar />
                  <FoodContainer />
                </div>
                <div className="column">
                  <Header>Food To Add</Header>
                </div>
              </div>
            </Modal.Description>
            <Modal.Actions>
              <Button icon='check' content='Submit' onClick={this.handleSubmit}/>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
      </div>
      )
    }
}

export default AddModal;
