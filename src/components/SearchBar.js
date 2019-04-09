import React from 'react'
import { connect } from 'react-redux'
import { setSearch } from '../redux/actions/searchBar'

const SearchBar = (props) => (
  <div className="ui large icon input">
   <input onChange={(e)=>props.setSearch(e.target.value)} type="text" placeholder="Search large..."/>
   <i className="search icon"></i>
 </div>
)

const mapDispatchToProps = dispatch => {
  return {
    setSearch: (text)=>{dispatch(setSearch(text))}
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
