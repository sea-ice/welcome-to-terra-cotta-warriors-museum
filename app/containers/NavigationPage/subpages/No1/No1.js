import React, {Component} from 'react'
import CSSModule from 'react-css-modules'

import styles from '../../../../assets/css/Common.css'
import render from '../../../../utils/3D-render'

class No1 extends Component {
  constructor (props) {
    super(props)
    this.extraImages = [{
      path: '../../../../assets/images/scene/extra/2-1.jpg'
    }, {
      path: '../../../../assets/images/scene/extra/2-2.jpg'
    }, {
      path: '../../../../assets/images/scene/extra/2-3.jpg'
    }]
  }
  componentDidMount () {
    render({
      ele: this.render,
      mtlPath: '/assets/obj/一号坑.mtl',
      objPath: '/assets/obj/一号坑3D模型.obj'
    })
  }
  render () {
    return (
      <main styleName="main">
        <div
          styleName="three-dimension-render"
          ref={ele => this.render = ele}
        ></div>
        <div
          styleName="normal-introduction"
          ref={ele => this.introduction = ele}
        >
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
            <p styleName="text">一号坑为东西向的长方形坑，长230米，宽62米，总面积14260平方米，四周各有五个门道。坑东西两端有长廊，南北两侧各有一边廊，中间为九条东西向过洞，过洞之间以夯土墙间隔。这个坑以车兵为主体，车、步兵成矩形联合编队。军阵主体面向东，在南、北、西边廊中各有一排武士面向外，担任护翼和后卫；东面三排武士为先锋。九个过洞内排列着战车与步兵的庞大主体军阵，每个过洞内有四列武士，有的穿战袍，有的着铠甲，中间配有战车，每辆战车后有 御手一名，车士两名。</p>
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(No1, styles)
