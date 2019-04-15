import React, { Component } from 'react'
import { Modal, Header, Button, Rating } from 'semantic-ui-react'
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
        <Modal className="modalCustom" dimmer={"blurring"} size='big' open={active} onClose={noShow}>
        <Modal.Header>
          <Header>{data.title} - {data.category}</Header>
        </Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <p>{data.description}</p>
            <p>{data.instructions}</p>
            <IngredientsTable food={data.food} />
            <Button toggle active={this.checkIfFavorite()} onClick={this.handleFavClick}>
              {this.checkIfFavorite()? "Unfavorite" : "Favorite"}
            </Button>
          </Modal.Description>
        </Modal.Content>
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
