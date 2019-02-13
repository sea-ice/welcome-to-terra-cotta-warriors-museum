import React, { Component } from 'react'
import CSSModule from 'react-css-modules'

import data from '../../assets/json/data'
import {computeXPosRange} from '../../utils'
import Particle from '../Particle/Particle'
import styles from './ParticleFlow.css'

/**
 * canvas粒子碰撞实例：http://wow.techbrood.com/fiddle/31111
 */
class ParticleFlow extends Component {
  state={}
  constructor (props) {
    super(props)
    this.init()
  }
  init () {
    this.options = {
      minspacing: 40,
      maxr: 40,
      minr: 20,
      hspeed: 1, // 水平匀速
      particles: data,
      miny: 250,
      maxy: 450,
      hwidth: 3000
    }
    this.worker = new Worker('/assets/js/computeParticles.js')
    this.worker.onmessage = (e) => {
      let {data: {type, data}} = e
      if (type === 'draw') {
        let {circles} = data
        this.setState({
          circles
        })
      }
    }
    let {hwidth} = this.options
    let [minx, maxx] = computeXPosRange(hwidth)
    this.options.minx = minx
    this.options.maxx = maxx
    this.worker.postMessage({
      type: 'init',
      data: {
        options: this.options
      }
    })
  }
  componentWillUnmount () {
    this.worker.terminate()
  }
  render () {
    let particles,
        {circles} = this.state
    if (circles && circles.length) {
      particles = circles.map(
        circle => <Particle key={circle.id} circle={circle}></Particle>
      )
    }
    return (
      <div styleName="particles">
        {particles}
        <p styleName="window">
          拖进来<br />发现更多
        </p>
      </div>
    )
  }
}

export default CSSModule(ParticleFlow, styles)
