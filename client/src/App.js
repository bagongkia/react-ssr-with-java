import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page1 from './containers/Page1'
import Page2 from './containers/Page2'
import Page3 from './containers/Page3'
import PageNotFound from './containers/PageNotFound'

export default class App extends React.Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Page1}/>
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
          <Route path="/page3" component={Page3}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    )
  }
}