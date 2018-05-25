import React, {Component} from 'react'
import CSSModule from 'react-css-modules'
import {Link} from 'react-router-dom'

import styles from '../../../../assets/css/Common.css'

class General extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <main styleName="main">
        <div
          styleName="large-image-wrapper"
        >
        </div>
        <div styleName="narrow-introduction">
          <div styleName="section">
            <h4 styleName="section-title">介绍：</h4>
            <p styleName="text"></p>
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(General, styles)