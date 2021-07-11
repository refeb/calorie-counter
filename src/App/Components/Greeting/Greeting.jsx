import React from 'react'
import PropTypes from 'prop-types'

// export class Greeting extends React.Component {
//   render () {
//     return <div>Welcome {this.props.name}</div>
//   }
// }
export function Greeting ({ name }) {
  return <div>Welcome {name}</div>
}
Greeting.propTypes = {
  name: PropTypes.string
}
