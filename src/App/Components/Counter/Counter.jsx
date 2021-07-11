import React from 'react'

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: props.initialValue
    }
  }

  handleIncrease = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      }
    })
  }

  handleReset = () => {
    this.setState(() => {
      return {
        number: 0
      }
    })
  }

  render () {
    return (
      <div>
        <p>Count {this.state.number}</p>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
