import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
        <h3>{this.props.children}</h3>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}

App.propTypes = {
  name: React.PropTypes.string
}

App.defaultProps = {
  name: 'ReactCounter'
}

export default App
