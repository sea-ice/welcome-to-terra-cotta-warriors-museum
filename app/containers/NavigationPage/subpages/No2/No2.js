import React, {Component} from 'react'
import CSSModule from 'react-css-modules'

import styles from '../../../../assets/css/Common.css'
import render from '../../../../utils/3D-render'

class No2 extends Component {
  constructor (props) {
    super(props)
    this.extraImages = [{
      path: '../../../../assets/images/scene/extra/3-1.jpg'
    }, {
      path: '../../../../assets/images/scene/extra/3-2.jpg'
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
            <p styleName="text">秦始皇二号俑坑呈曲尺形，位于一号坑的东北侧和三号坑的东侧，东西长96米，南北宽为84米，总面积约为6000平方米。坑内建筑与一号坑相同，但布阵更为复杂，兵种更为齐全，是3个坑中最为壮观的军阵。它是由骑兵、战车和步兵（包括弩兵）组成的多兵种特殊部队。<br />二号坑建有1.7万平方米的陈列大厅，是目前我国规模最大、功能最齐全的现代化遗址陈列厅。二号坑有陶俑陶马1300多件，战车80余辆，青铜兵器数万件，其中将军俑、鞍马俑、跪姿射俑为首次发现。二号坑东、西两端各有4个斜坡门道，北边有2个斜坡门道，俑坑坐西面东，正门在东边。</p>
          </div>
        </div>
      </main>
    )
  }
}

export default CSSModule(No2, styles)
