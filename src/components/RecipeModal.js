import React, { Component } from 'react'
import { Modal, Header, Button, Label, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import IngredientsTable from './IngredientsTable'
import { removeFavRecipe, addFavRecipe } from '../redux/actions/user'

//make funtional?

class RecipeModal extends Component {

  checkIfFavorite = () => {
    const { data, favList } = this.props

    let favRecipeListIds = favList.map((recipe)=>recipe.id)

    return favRecipeListIds.includes(data.id)
  }

  handleFavClick = () =>{
    const { data, removeFavRecipe, addFavRecipe } = this.props

    this.checkIfFavorite()? removeFavRecipe(data.id): addFavRecipe(data.id)
  }

  render() {

  const { data, active, noShow } = this.props

  return (
      <div>
      {!this.props.data?null:
        <Modal className="modalCustom" size='big' open={active} onClose={noShow}>
          <div className="outlineOrange6">
          <Modal.Header>
            <Header>{data.title} - <Button toggle active={this.checkIfFavorite()} onClick={this.handleFavClick}>
              {this.checkIfFavorite()? "Unfavorite" : "Favorite"}
              </Button>
            </Header>
          </Modal.Header>
          <Modal.Content image>

            <Modal.Description>

            <Label >{data.category}</Label>

            <div className="outlineOrange22">
              <Label>Description</Label>
              <Divider />
              <p>{data.description}</p>
            </div>

            <div className="outlineOrange22">
              <Label>Instructions</Label>
              <Divider />
              <p>{data.instructions}</p>
            </div>

            <div className="outlineOrangesheesh" >
              <IngredientsTable food={data.food} />
            </div>

            </Modal.Description>
          </Modal.Content>
          </div>
        </Modal>
      }
      </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavRecipe: (id)=>{dispatch(addFavRecipe(id))},
    removeFavRecipe: (id)=>{dispatch(removeFavRecipe(id))}
    }
}

const mapStateToProps = state =>({
  favList: state.user.recipes
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeModal)
