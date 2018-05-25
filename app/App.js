// @flow
import * as React from 'react'
import CSSModule from 'react-css-modules'

import styles from './App.css'

type Props = {
  children: React.Node
}

class App extends React.Component<Props> {
  props: Props;
  render () {
    return (
      <div styleName="app">
        {this.props.children}
      </div>
    )
  }
}

export default CSSModule(App, styles)
