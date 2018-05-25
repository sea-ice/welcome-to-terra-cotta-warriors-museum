import React, { Component } from 'react'
import CSSModule from 'react-css-modules'

import ParticleFlow from '../../components/ParticleFlow/ParticleFlow'
import styles from './Home.css'

class Home extends Component {
  render () {
    return (
      <div styleName="homepage">
        <ParticleFlow></ParticleFlow>
      </div>
    )
  }
}

export default CSSModule(Home, styles)
