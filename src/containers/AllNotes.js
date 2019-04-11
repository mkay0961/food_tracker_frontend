import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotesContainer from './NotesContainer'

class AllNotes extends Component {

  genContainers = () => {


    let rtnArray = []
    Object.keys(this.props.notes).forEach((interval, i)=>{
      rtnArray.push(<NotesContainer key={i} data={this.props.notes[interval]} name={interval} />)
    })
    return rtnArray
  }

  render() {
    return (
     <div className="ui card">
        {this.genContainers()}
     </div>
   )
 }
}

const mapStateToProps = state =>({
  notes: state.user.notes
})

export default connect(mapStateToProps, null)(AllNotes)
