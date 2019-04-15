import React, { Component } from 'react'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar'


class AllNotes extends Component {

  render() {
    return (
     <div >
       <Calendar/>
     </div>
   )
 }
}

const mapStateToProps = state =>({
  notes: state.user.notes
})

export default connect(mapStateToProps, null)(AllNotes)
// <Calendar />
