import React, {Component} from 'react'
import CSSModule from 'react-css-modules'

import styles from '../../../../assets/css/Common.css'

class General extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0,
      imagePath: '../../../../assets/images/scene/地图/地图全景.jpg'
    }
    this.handleRecommendClick = this.handleRecommendClick.bind(this)
  }
  handleRecommendClick (e) {
    let symbol = e.target.dataset.symbol
    console.log(symbol)
    let {active} = this.state
    if (active !== symbol) {
      this.setState({
        active: symbol,
        imagePath: `../../../../assets/images/scene/地图/推荐路线${symbol}.jpg`
      })
    }
  }
  render () {
    let {imagePath} = this.state
    return (
      <main styleName="main">
        <div
          styleName="large-image-wrapper"
        >
          <img src={imagePath} styleName="cover-image" alt=""/>
        </div>
        <div styleName="narrow-introduction">
          <div styleName="button-wrapper">
            <div
              styleName="recommend-one"
              data-symbol="1"
              onClick={this.handleRecommendClick}
              style={{backgroundImage: `url(../../../../assets/icons/${this.state.active === '1' ? '3-1-2' : '3-1'}.png)`}}
            ></div>
            <div
              styleName="recommend-two"
              data-symbol="2"
              onClick={this.handleRecommendClick}
              style={{backgroundImage: `url(../../../../assets/icons/${this.state.active === '2' ? '3-2-2' : '3-2'}.png)`}}
            ></div>
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(General, styles)
