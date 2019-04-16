import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import SearchPageBar from '../components/SearchPageBar'
import AdvancedModal from '../components/AdvancedModal'
import RecipeContainer from './RecipeContainer'
import RecipeModal from '../components/RecipeModal'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { connect } from 'react-redux'
import { Grid, Image, Segment } from 'semantic-ui-react'

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
      console.log(i,rtnVal.length );
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
          <div className="buttonsGroup">
            <SearchPageBar />
            <AdvancedModal />
          </div>
          <div class="recipeBookContainer">
            <Image width="110%" height="100%" src={require("../open-book.png")} />
            <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            <div className="recipeBookcentered book" >
              <Grid className="book">
                <Grid.Column className="paddingBook scroll" width={5}>
                  <Segment>
                  <RecipeContainer recipes={this.generateRecipes()["side1"]} handleClick={this.handleShowModal} />
                  </Segment>
                </Grid.Column>
                <Grid.Column  className="paddingBook scroll" width={5}>
                  <Segment>
                  <RecipeContainer recipes={this.generateRecipes()["side2"]} handleClick={this.handleShowModal} />
                  </Segment>
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
// <RecipeContainer recipes={this.generateRecipes()} handleClick={this.handleShowModal} />
