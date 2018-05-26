import React, {Component} from 'react'
import CSSModule from 'react-css-modules'

import styles from '../../../../assets/css/Common.css'

class Park extends Component {
  constructor (props) {
    super(props)
    this.extraImages = [{
      path: '../../../../assets/images/scene/extra/6-1.jpg'
    }, {
      path: '../../../../assets/images/scene/extra/6-2.jpg'
    }]
  }
  render () {
    return (
      <main styleName="main">
        <div
          styleName="normal-image-wrapper"
        >
          <img
            src="../../../../assets/images/scene/main/6.jpg"
            styleName="cover-image"
            alt=""
          />
        </div>
        <div styleName="normal-introduction">
          <div styleName="section">
            <h4 styleName="section-title">图片资料：</h4>
            <ul styleName="row-images">
              {this.extraImages.map((img, index) => <li
                key={index}
                styleName="row-image-item"
                >
                  <img
                    src={img.path} alt=""
                    styleName="extra-image"
                  />
                </li>)}
            </ul>
          </div>
          <div styleName="section">
            <h4 styleName="section-title">介绍：</h4>
            <p styleName="text">秦始皇帝陵史称“丽山园”，丽山园与开放多年的秦兵马俑博物馆，同为秦始皇帝陵博物院的组成部分，是中国历代帝王陵中规模最大、埋藏物最丰富的一座大型陵墓。<br />帝陵陵园整体布局以封土为中心，封土呈覆斗形，南北长355米，东西宽345米，高约76米。封土四周有内、外两重城垣，城垣基础宽约8米，均夯筑而成。内城垣南北长1355米，东西宽580米，面积0.79平方公里。外城垣南北长2188米，东西宽971米，面积2.13平方公里。<br />外城以内已发现的主要遗址和遗迹有帝陵封土、铜车马坑、寝殿、便殿、陪葬墓区、食官遗址、园寺吏舍遗址、珍禽异兽坑、铠甲坑、百戏俑坑、文吏俑坑（K0006坑）、陵墙、东西门阙、廊房等，是秦始皇帝陵的核心区域。</p>
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(Park, styles)
