import React from 'react'
import { Link } from 'react-router-dom'

export default class Page2 extends React.Component {
  render() {
    return (
      <div>
        <h3>Page 2</h3>
        <Link to="/page3">Go to Page 3</Link>
      </div>
    )
  }
}