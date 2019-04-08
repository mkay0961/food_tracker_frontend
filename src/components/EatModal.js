import React from 'react';
import { Header, Modal } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import CategoriesContainer from '../containers/CategoriesContainer'
import FoodContainer from '../containers/FoodContainer'

const handleEatClick = () =>{
  console.log("hi");
}

const EatModal = (props) => (
  <div>
    <Modal dimmer={"blurring"} trigger={<button className="ui button">Eat Food</button>}>
      <Modal.Header>Eat Food</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>stuff</Header>
          <div className="row">
            <div className="column">
              <Header>My Food</Header>
              <SearchBar />
              <div className="scrollable">
                <CategoriesContainer />
              </div>
            </div>
            <div className="column">
                <Header>Food To Eat</Header>
                <div className="scrollable">
                  <FoodContainer food={[]}/>
                </div>
            </div>
          </div>
            <button className="ui button" type="submit">Submit</button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>
);

export default EatModal;
