import React from 'react'
import { connect } from 'react-redux'
import { setSearchPage } from '../redux/actions/searchPageBar'
import { Input } from 'semantic-ui-react'

const SearchPageBar = (props) => (
  <div >
   <Input className="outlineblack" size='massive' onChange={(e)=>props.setSearchPage(e.target.value)} value={props.searchPage} icon='search' placeholder='Search...' />
 </div>
)

const mapDispatchToProps = dispatch => {
  return {
    setSearchPage: (text)=>{dispatch(setSearchPage(text))}
  }
}

const mapStateToProps = state =>({
  searchPage: state.searchPage
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageBar)
