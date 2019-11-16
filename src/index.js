/* eslint-disable import/default */
/* eslint-disable no-console */
import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/config'
import Root from './components/Root'
import { getweb3 } from './actions/user-actions'

export const store = configureStore()
// store.dispatch(getweb3());

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
