import React, { Component } from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import FoodContainer from '../containers/FoodContainer'
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
        <Modal dimmer={"blurring"} open={active} onClose={noShow}>
        <Modal.Header>
          <div>Recipe</div>
          <Button toggle active={this.checkIfFavorite()} onClick={this.handleFavClick}>
            {this.checkIfFavorite()? "Unfavorite" : "Favorite"}
          </Button>
        </Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>{data.title}</Header>
            <h1>{data.description}</h1>
            <h1>{data.category}</h1>
            <h1>{data.instructions}</h1>
            <FoodContainer food={data.food} />
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
