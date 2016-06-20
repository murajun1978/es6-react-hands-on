import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }
  countUp(e){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  countDown(e){
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
        <h3>{this.props.children}</h3>
        <h1>{this.state.counter}</h1>
      <button onClick={this.countUp.bind(this)}>+</button>
      <button onClick={this.countDown.bind(this)}>-</button>
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
