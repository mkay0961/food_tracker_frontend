import React, {Component} from 'react'
import SearchPageBar from '../components/SearchPageBar'
import AdvancedModal from '../components/AdvancedModal'
import RecipeContainer from './RecipeContainer'
import RecipeModal from '../components/RecipeModal'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'
import { Grid, Image, Segment } from 'semantic-ui-react'
import Navbar from '../components/Navbar'



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
        rtnVal = false
      }

    return rtnVal
  }

  generateRecipes = () =>{
    const { recipes, advancedSearch, searchPage } = this.props
    let obj = {side1:[],side2:[]}

    let rtnVal = recipes
    if(advancedSearch.withIngredients){
      rtnVal = recipes.filter((recipe)=>this.recipeCheck(recipe))
    }
    rtnVal = rtnVal.filter((aFood)=>(aFood.title.toLowerCase().includes(searchPage.toLowerCase())))
    rtnVal.forEach((recipe, i)=>{
      if(i <= rtnVal.length/2){
        obj["side1"].push(recipe)
      }else{
        obj["side2"].push(recipe)
      }
    })
    return obj
  }

  render() {
    const { current, showModal } = this.state

    return (
       <div>
         <Navbar />
          <div className="">
          <div className="buttonsGroup ">
            <SearchPageBar />
            <Segment className="advancedmodal">
              <AdvancedModal />
            </Segment>
          </div>
          <div className="recipeBookContainer " >
            <Image width="110%" height="100%" src={require("../open-book22.jpeg")} />
              <Grid className="gridBook">
                <Grid.Column className="gridBookColRight" width={5}>
                  <RecipeContainer recipes={this.generateRecipes()["side1"]} handleClick={this.handleShowModal} />
                </Grid.Column>
                <Grid.Column  className="gridBookColLeft" width={5}>
                  <RecipeContainer recipes={this.generateRecipes()["side2"]} handleClick={this.handleShowModal} />
                </Grid.Column>
              </Grid>
          </div>
          </div>
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
