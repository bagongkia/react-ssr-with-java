import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App';

window.render = (template, model) => {
  const req = JSON.parse(model.get('req'))
  const context = {}
  const markup = renderToString(
    <StaticRouter location={req.location} context={context}>
      <App/>
    </StaticRouter>
  )

  return template.replace('SERVER_RENDERED_HTML', markup)
}