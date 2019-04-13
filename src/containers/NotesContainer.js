import React, { Component } from 'react'
import Note from '../components/Note'
import BigCalendar from 'react-big-calendar'

class NotesContainer extends Component {

  genNotes = () => {
    return this.props.data.map((item, i)=>{
      return <Note key={i} data={item} />
    })
  }

  render() {
    return (
     <div >
        {this.props.name.toUpperCase()}
        {this.genNotes()}
     </div>
   )
 }
}

export default (NotesContainer)
