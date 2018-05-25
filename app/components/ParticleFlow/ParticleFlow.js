import React, { Component } from 'react'
import CSSModule from 'react-css-modules'

import data from '../../assets/json/data'
import {getRandomInRange, computeXPosRange, initializeParticles, isCollided} from '../../utils'
import Particle from '../Particle/Particle'
import styles from './ParticleFlow.css'

class ParticleFlow extends Component {
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
      miny: 200,
      maxy: 400,
      hwidth: 3000
    }
    let {hwidth} = this.options
    let [minx, maxx] = computeXPosRange(hwidth)
    this.options.minx = minx
    this.options.maxx = maxx
    let circles = initializeParticles(this.options)
    this.state = {
      circles
    }
  }
  componentDidMount () {
    this.computeNewFrame()
  }
  computeNewFrame () {
    let {hspeed, maxx, minx, maxy, miny, minspacing} = this.options
    let saveCircles = this.state.circles
    let newCircles = this.state.circles.map(c => {
      let nx = c.x + hspeed
      let ny = c.y + c.dy
      if (nx >= maxx) nx = minx

      ny = Math.max(Math.min(ny, maxy), miny)
      if (ny >= maxy || ny <= miny) c.dy = c.dy === -1 ? 1 : -1
      return Object.assign(c, {
        nx, ny
      })
    })
    let collided = false,
        collidedCircles = new Set()
    for (let targetCircle of newCircles) {
      for (let circle of newCircles) {
        if (circle !== targetCircle) {
          if (isCollided(circle, targetCircle, 0)) {
            collided = true
            collidedCircles.add(circle)
            collidedCircles.add(targetCircle)
          }
        }
      }
    }
    if (collided) {
      for (let cc of collidedCircles) {
        cc.dy = (cc.dy === -1 ? 1 : -1)
        cc.y = cc.y + cc.dy
      }
    } else {
      for (let c of newCircles) {
        c.x = c.nx
        c.y = c.ny
      }
      this.setState({
        circles: newCircles
      })
    }
    setTimeout(() => {
      this.computeNewFrame()
    }, 50)
  }
  render () {
    let particles = this.state.circles.map(
      circle => <Particle key={circle.id} circle={circle}></Particle>
    )
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
