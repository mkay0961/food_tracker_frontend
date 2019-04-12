import React from 'react'
import { connect } from 'react-redux'
import { setSearchPage } from '../redux/actions/searchPageBar'

const SearchPageBar = (props) => (
  <div className="ui large icon input">
   <input onChange={(e)=>props.setSearchPage(e.target.value)} value={props.searchPage} type="text" placeholder="Search large..."/>
   <i className="search icon"></i>
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
