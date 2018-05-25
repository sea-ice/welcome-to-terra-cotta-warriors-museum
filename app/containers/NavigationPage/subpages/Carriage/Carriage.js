import React, {Component} from 'react'
import CSSModule from 'react-css-modules'
import {Link} from 'react-router-dom'

import styles from '../../../../assets/css/Common.css'

class Carriage extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <main styleName="main">
        <div
          styleName="normal-image-wrapper"
        >
        </div>
        <div styleName="introduction">
          <div styleName="section">
            <h4 styleName="section-title">介绍：</h4>
            <p styleName="text"></p>
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(Carriage, styles)
