import React from 'react'
import { connect } from 'react-redux'
import { setSearch } from '../redux/actions/searchBar'
import { Input } from 'semantic-ui-react'

const SearchBar = (props) => (
  <div className="ui large icon input test2">
    <Input size='massive' onChange={(e)=>props.setSearch(e.target.value)} value={props.searchPage} icon='search' placeholder='Search...' />
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    setSearch: (text)=>{dispatch(setSearch(text))}
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
