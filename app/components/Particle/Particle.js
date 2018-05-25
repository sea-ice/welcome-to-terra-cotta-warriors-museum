import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModule from 'react-css-modules'
import { Link } from 'react-router-dom'

import styles from './Particle.css'

class Particle extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {x, y, r, url, image} = this.props.circle
    return (
      <Link
        to={url}
        styleName="particle"
        style={{width: `${r * 2}px`, height: `${r * 2}px`, transform: `translate3d(${x}px, ${y}px, 0)`,backgroundImage: `url(${image})`}}
      ></Link>
    )
  }
}

export default CSSModule(Particle, styles)
