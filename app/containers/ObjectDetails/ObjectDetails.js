import React, {Component} from 'react'
import CSSModule from 'react-css-modules'
import {Link} from 'react-router-dom'

import data from '../../assets/json/data'
import styles from '../../assets/css/Common.css'

class ObjectDetails extends Component {
  constructor (props) {
    super(props)
    this.initPage()
  }
  initPage () {
    let {match} = this.props
    let id = match.params.id
    this.pageData = data.filter(item => item.id === id)[0]
  }
  render () {
    let {name, id, details} = this.pageData
    return (
      <div styleName="container">
        <div styleName="wrapper">
          <img styleName="bgimage" src="../../assets/images/地图导览-背景.jpg" alt=""/>
          <div styleName="content">
            <div styleName="header">
              <h2 styleName="title">{name}</h2>
              <Link to="/" styleName="close"></Link>
            </div>
            <main styleName="main">
              <div
                styleName="normal-image-wrapper"
              >
                <img styleName="object-image" src={`/assets/images/图片资源/首页文物小图合集300/${id}.png`} />
              </div>
              <div styleName="normal-introduction">
                <div styleName="section">
                  <h4 styleName="section-title">介绍：</h4>
                  <p styleName="text">{details}</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModule(ObjectDetails, styles)
