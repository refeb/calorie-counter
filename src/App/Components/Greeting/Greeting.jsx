import React from 'react'
import PropTypes from 'prop-types'

export class Greeting extends React.Component {
  render () {
    return <div>Welcome {this.props.name}</div>
  }
}
Greeting.propTypes = {
  name: PropTypes.string
}
