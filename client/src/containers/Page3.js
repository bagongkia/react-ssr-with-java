import React from 'react'
import { Link } from 'react-router-dom'

export default class Page3 extends React.Component {
  render() {
    return (
      <div>
        <h3>Page 3</h3>
        <Link to="/page1">Go to Page 1</Link>
      </div>
    )
  }
}