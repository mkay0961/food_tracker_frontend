import React from 'react'
import { connect } from 'react-redux'

const Food = (props) => (
 <div className="ui card" onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
    {`${props.data.name}`}
    {props.data.amount?props.data.amount:null}
 </div>
)
// const mapDispatchToProps = dispatch => {
//   return {
//
//     }
// }
//
// const mapStateToProps = state =>({
// })

export default connect(null, null)(Food)
// export default connect(mapStateToProps, mapDispatchToProps)(Food)
