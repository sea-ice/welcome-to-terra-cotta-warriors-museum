import React, {Component} from 'react'
import CSSModule from 'react-css-modules'
import {Link} from 'react-router-dom'

import styles from '../../../../../assets/css/Common.css'

class Toilet extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <main styleName="main">
        <div
          styleName="large-image-wrapper"
        >
          <img src="../../../../../assets/images/scene/main/7.jpg"
          styleName="cover-image" alt=""/>
        </div>
        <div styleName="narrow-introduction">
          <div styleName="button-wrapper">
            <Link
              styleName="recommend-one"
              to="/scene"
              style={{backgroundImage: `url(../../../../../assets/icons/3-1.png)`}}
            />
            <Link
              styleName="recommend-two"
              to="/scene"
              style={{backgroundImage: `url(../../../../../assets/icons/3-2.png)`}}
            />
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(Toilet, styles)
