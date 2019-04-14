import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { setIngredientsSearch,
         resetIngredientsSearch } from '../redux/actions/searchByIngredients'


class AdvancedModal extends Component {

  onChangeCheck = () => {

    const { advancedSearch, resetIngredientsSearch, setIngredientsSearch } = this.props

    if(advancedSearch.withIngredients){
      resetIngredientsSearch()
    }else{
      setIngredientsSearch()
    }
  }

  onOpen = () => {
    this.props.clearSearchPage()
  }

  render() {
    const { advancedSearch } = this.props

    return (
      <div>
        <Modal size={"fullscreen"} dimmer={"blurring"}
               trigger={<button onClick={this.onOpen} className="advancedSearch ui button">Advanced Search</button>}>
          <Modal.Header>Advanced Search</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <form className="ui form">
                <div className="field">
                  <label>Show recipes by ingredients</label>
                  {advancedSearch.withIngredients?
                  <input onChange={()=>this.onChangeCheck()}
                         checked
                         type="checkbox"
                         name="ingredients"
                         placeholder="ingredients"/>
                  :
                  <input onChange={()=>this.onChangeCheck()}
                         type="checkbox"
                         name="ingredients"
                         placeholder="ingredients"/>
                  }
                </div>
              </form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>

    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setIngredientsSearch: ()=>{dispatch(setIngredientsSearch())},
    resetIngredientsSearch: ()=>{dispatch(resetIngredientsSearch())},
    clearSearchPage: ()=>{dispatch(clearSearchPage())}
    }
}

const mapStateToProps = state =>({
  advancedSearch: state.advancedSearch
})

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedModal)
