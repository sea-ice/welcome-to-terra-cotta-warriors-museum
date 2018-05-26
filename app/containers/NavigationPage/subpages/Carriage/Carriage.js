import React, {Component} from 'react'
import CSSModule from 'react-css-modules'

import styles from '../../../../assets/css/Common.css'

class Carriage extends Component {
  constructor (props) {
    super(props)
    this.extraImages = [{
      path: '../../../../assets/images/scene/extra/5-1.jpg'
    }, {
      path: '../../../../assets/images/scene/extra/5-2.jpg'
    }]
  }
  render () {
    return (
      <main styleName="main">
        <div
          styleName="normal-image-wrapper"
        >
          <img
            src="../../../../assets/images/scene/main/5.jpg"
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
            <p styleName="text">1980年在秦始皇陵西侧发现了两辆用青铜制作，以四匹马拉的战车，大小为真车马的二分之一。是目前发现年代最早、形体最大、保存最完整的铜铸车马，对研究中国古代车马制度、雕刻艺术和冶炼技术等，都具有极其重要的历史价值。这套大型的人俑车马代表了秦代青铜铸造工艺的突出成就。</p>
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(Carriage, styles)
