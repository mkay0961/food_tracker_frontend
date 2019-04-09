import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'



const Food = (props) => (
  
 <Card onClick={(props.handleClick)?()=>props.handleClick(props.data):null}>
      {`${props.data.name}`}
      {props.data.amount?props.data.amount:null}
 </Card>
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
