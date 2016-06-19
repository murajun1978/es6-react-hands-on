import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
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
