import React, {Component} from 'react'
import CSSModule from 'react-css-modules'

import styles from '../../../../assets/css/Common.css'
import render from '../../../../utils/3D-render'

class No3 extends Component {
  constructor (props) {
    super(props)
    this.extraImages = [{
      path: '../../../../assets/images/scene/extra/4-1.jpg'
    }, {
      path: '../../../../assets/images/scene/extra/4-2.jpg'
    }]
  }
  componentDidMount () {
    render({
      ele: this.render,
      mtlPath: '/assets/obj/二号坑.mtl',
      objPath: '/assets/obj/二号坑3D模型.obj'
    })
  }
  render () {
    return (
      <main styleName="main">
        <div
          styleName="three-dimension-render"
          ref={ele => this.render = ele}
        ></div>
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
            <p styleName="text">秦始皇兵马俑三号坑位于一号坑西端北侧，与二号坑东西相对，南距一号坑25米，东距二号坑120米，面积约为520平方米，整体呈凹字形，由南北厢房和车马房组成，车马房中有一辆驷马战车及四件兵马俑，三号坑共可出土兵马俑68个。从3号坑的内部布局看，应为一二号坑的指挥部。三号坑是三个坑中唯一一个没有被大火焚烧过的，所以出土时陶俑身上的彩绘残存较多，颜色比较鲜艳。</p>
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(No3, styles)
