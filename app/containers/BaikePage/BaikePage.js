import React, {Component} from 'react'
import CSSModule from 'react-css-modules'
import {Link} from 'react-router-dom'

import data from '../../assets/json/data'
import styles from '../../assets/css/Common.css'

class BaikePage extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div styleName="container">
        baike
      </div>
    )
  }
}

export default CSSModule(BaikePage, styles)
