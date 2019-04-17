import React, { Component } from 'react'
import { Modal, Input, Form, Segment, Button, Checkbox } from 'semantic-ui-react'
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
    this.setState({status: true})
    this.props.clearSearchPage()
  }

  onClose = () => {
    this.setState({status: false})
  }


  render() {
    const { advancedSearch } = this.props

    return (
      <div>
        <Modal onClose={this.onClose}
               size="large"
               trigger={<Button onClick={this.onOpen}
                                size='massive'
                                className="advancedSearch ui button fontsize">
                            Advanced Search
                        </Button>}>

          <Modal.Header>
            Advanced Search
          </Modal.Header>

          <Modal.Content image>
            <Modal.Description>
              <Form>
                <Segment>
                  <Checkbox toggle onChange={()=>this.onChangeCheck()}
                         checked={advancedSearch["withIngredients"]}
                         type="checkbox"
                         label="Show recipes by ingredients"
                         name="ingredients"
                         placeholder="ingredients"/>
                </Segment>
                <Segment>
                  <Input onChange={()=>this.onChangeNum()}
                         id="misNum"
                         label="Mis Match Num"
                         type='number'
                         pattern='[0-9]{0,5}'
                         />
                  </Segment>
              </Form>
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
