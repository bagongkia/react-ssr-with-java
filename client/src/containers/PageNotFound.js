import React from 'react'
import { Link } from 'react-router-dom'

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h3>Page Not Found</h3>
        <Link to="/page1">Go to Page 1</Link>
      </div>
    )
  }
}