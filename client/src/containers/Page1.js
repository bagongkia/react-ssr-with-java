import React from 'react'
import { Link } from 'react-router-dom'

export default class Page1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello World"
    }
  }

  render() {
    return (
      <div>
        <h3>Page 1</h3>
        <input type="text" value={this.state.message} onChange={(e)=>this.setState({message: e.target.value})}/>
        <h5>Message: {this.state.message}</h5>
        <Link to="/page2">Go to Page 2</Link>
      </div>
    )
  }
}