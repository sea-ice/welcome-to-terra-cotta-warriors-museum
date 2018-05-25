import React, {Component} from 'react'
import CSSModule from 'react-css-modules'
import {Link} from 'react-router-dom'

import data from '../../assets/json/data'
import styles from '../../assets/css/Common.css'

class ObjectsPage extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div styleName="container">
        ObjectsPage
      </div>
    )
  }
}

export default CSSModule(ObjectsPage, styles)
