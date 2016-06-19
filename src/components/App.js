import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
        <h3>{this.props.children}</h3>
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
