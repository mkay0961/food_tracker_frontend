import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import SearchPageBar from '../components/SearchPageBar'
import AdvancedModal from '../components/AdvancedModal'
import RecipeContainer from './RecipeContainer'
import RecipeModal from '../components/RecipeModal'
import NewRecipeModal from '../components/NewRecipeModal'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'

class RecipesPage extends Component {

  constructor(){
    super()
    this.state = {
      showModal: false,
      current: null
    }
  }

  componentDidMount(){
    this.props.clearSearchPage()
  }

  handleShowModal = (data) => {
    console.log(data)
    this.setState({showModal: true, current: data})
  }
  handleNoShowModal = () => {
    this.setState({showModal: false, current: null})
  }

  recipeCheck = (recipe) => {
    const { userFoods, advancedSearch } = this.props

    let rtnVal = false


      let useFoodIds = userFoods.map((food)=>{
        return food.food_id
      })
      let noMatch = 0
      let yesMatch = 0
      recipe.food.forEach((recipeFood)=>{
        // userFoods.forEach((userFood)=>{

        // console.log(recipeFood.name);
        if(useFoodIds.includes(recipeFood.food_id)){
          if(parseInt(recipeFood.amount.split(" ")[0]) <= parseInt(userFoods.find((food)=>food.food_id === recipeFood.food_id).combined_amount.split(" ")[0])){
            yesMatch += 1
          }else{
            noMatch += 1
          }


        }else{

          noMatch += 1

        }

      })

      if(yesMatch === recipe.food.length){
        rtnVal = true
      }else if ( yesMatch + parseInt(advancedSearch.misNum) >= recipe.food.length) {
        rtnVal = true
      }else{
        console.log("NOOOOOOOOOOOO");
        rtnVal = false
      }

    return rtnVal
  }

  generateRecipes = () =>{
    const { recipes, advancedSearch, searchPage } = this.props

    let rtnVal = recipes
    if(advancedSearch.withIngredients){

      rtnVal = recipes.filter((recipe)=>this.recipeCheck(recipe))
      console.log("return val = ",rtnVal)
    }
    return rtnVal.filter((aFood)=>(aFood.title.toLowerCase().includes(searchPage.toLowerCase())))
  }

  render() {
    const { current, showModal } = this.state

    return (
       <div>
          <Navbar />
          <div className="buttonsGroup">
            <SearchPageBar />
            <AdvancedModal />
            del<NewRecipeModal />
          </div>
          <RecipeContainer recipes={this.generateRecipes()} handleClick={this.handleShowModal} />
          <RecipeModal data={current} active={showModal} noShow={this.handleNoShowModal} />
       </div>
        )
      }
}
const mapDispatchToProps = dispatch => {
  return {
    clearSearchPage: ()=>{dispatch(clearSearchPage())}
  }
}

const mapStateToProps = state =>({
  recipes: state.recipes,
  searchPage: state.searchPage,
  userFoods: state.user.foods.nonExpired,
  advancedSearch: state.advancedSearch
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage)
