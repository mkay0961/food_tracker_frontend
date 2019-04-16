import React, { Component } from 'react'
import { Modal, Input, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { clearSearchPage } from '../redux/actions/searchPageBar'
import { setIngredientsSearch,
         resetIngredientsSearch,
         setMisMatchNum } from '../redux/actions/searchByIngredients'


class AdvancedModal extends Component {

  onChangeCheck = () => {

    const { advancedSearch, resetIngredientsSearch, setIngredientsSearch } = this.props

    if(advancedSearch.withIngredients){
      resetIngredientsSearch()
    }else{
      setIngredientsSearch()
    }
  }

  onChangeNum = () => {
    let num  = document.getElementById('misNum')
    if(num !== ""){
      this.props.setMisMatchNum(num.value)
    }
  }

  onOpen = () => {
    this.props.clearSearchPage()
  }

  render() {
    const { advancedSearch } = this.props

    return (
      <div>
        <Modal dimmer={"blurring"}
               className="modalCustom"
               trigger={<button onClick={this.onOpen} className="advancedSearch ui button">Advanced Search</button>}>
          <Modal.Header>Advanced Search</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <form className="ui form">
                <div className="field">
                  <Label>Show recipes by ingredients</Label>
                  <Input onChange={()=>this.onChangeCheck()}
                         checked={advancedSearch["withIngredients"]}
                         type="checkbox"
                         name="ingredients"
                         placeholder="ingredients"/>

                  
                  <Input onChange={()=>this.onChangeNum()}
                         id="misNum"
                         label="Mis Match Num"
                         type='number'
                         pattern='[0-9]{0,5}'
                         />
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
    clearSearchPage: ()=>{dispatch(clearSearchPage())},
    setMisMatchNum: (num)=>{dispatch(setMisMatchNum(num))}
    }
}

const mapStateToProps = state =>({
  advancedSearch: state.advancedSearch
})

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedModal)
