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
    const { userFoods } = this.props

    let rtnVal = true

    // let userFoodIds = userFoods.map((food)=>food.food_id)
    // let recipeFoodIds = recipe.food.map((food)=>food.food_id)

      let obj = {}

      recipe.food.forEach((recipeFood)=>{
        userFoods.forEach((userFood)=>{

        if(recipeFood.name === userFood.name){
          console.log(recipeFood.name, userFood.name);
          if(!(recipeFood.food_id === userFood.food_id && (userFood.combined_amount.split(" ")[0]-recipeFood.amount.split(" ")[0] >= 0))){
            // console.log("DOesnt work")
            if(!obj[recipeFood.food_id] === true){
              obj[recipeFood.food_id] = false
            }
          }else{
            obj[recipeFood.food_id] = true
            // console.log("it works",userFood.amount.split(" ")[0],recipeFood.amount.split(" ")[0])
          }

        }
        })
      })
      rtnVal = !Object.values(obj).includes(false)
      console.log("canKJGLKJHG recipe", obj)

    return rtnVal
    // console.log(rtnVal)
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
            <NewRecipeModal />
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
