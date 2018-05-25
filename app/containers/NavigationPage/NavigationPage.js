import React, {Component} from 'react'
import CSSModule from 'react-css-modules'
import {Route, Link} from 'react-router-dom'

import data from '../../assets/json/data'
import styles from '../../assets/css/Common.css'
import General from './subpages/General/General'
import No1 from './subpages/No1/No1'
import No2 from './subpages/No2/No2'
import No3 from './subpages/No3/No3'
import Carriage from './subpages/Carriage/Carriage'
import Park from './subpages/Park/Park'

class NavigationPage extends Component {
  constructor (props) {
    super(props)
    this.routes = [{
      path: '/scene/',
      component: () => <General />,
      title: () => <h2 className={this.props.styles.title}>全景导览</h2>
    }, {
      path: '/scene/no.1',
      component: () => <No1 />,
      title: () => <h2 className={this.props.styles.title}>兵马俑一号坑</h2>
    }, {
      path: '/scene/no.2',
      component: () => <No2 />,
      title: () => <h2 className={this.props.styles.title}>兵马俑二号坑</h2>
    }, {
      path: '/scene/no.3',
      component: () => <No3 />,
      title: () => <h2 className={this.props.styles.title}>兵马俑三号坑</h2>
    }, {
      path: '/scene/carriage',
      component: () => <Carriage />,
      title: () => <h2 className={this.props.styles.title}>铜车马展厅</h2>
    }, {
      path: '/scene/park',
      component: () => <Park />,
      title: () => <h2 className={this.props.styles.title}>骊山园</h2>
    }]
  }
  render () {
    return (
      <div styleName="container">
        <div styleName="wrapper">
          <img styleName="bgimage" src="../../assets/images/地图导览-背景.jpg" alt=""/>
          <div styleName="content">
            <div styleName="header">
              {this.routes.map((route, index) => <Route
                exact
                key={index}
                path={route.path}
                component={route.title} />
              )}
              <Link to="/" styleName="close"></Link>
            </div>
            {this.routes.map((route, index) => <Route
              exact
              key={index}
              path={route.path}
              component={route.component} />
            )}
            <footer styleName="footer">
              <div styleName="large-button-wrapper">
                <Link
                  to="/scene/"
                  styleName="large-button"
                  style={{backgroundImage: `url(../../assets/icons/1-1.png)`}}
                ></Link>
                <Link
                  to="/scene/no.1"
                  styleName="large-button"
                  style={{backgroundImage: `url(../../assets/icons/1-2.png)`}}
                ></Link>
                <Link
                  to="/scene/no.2"
                  styleName="large-button"
                  style={{backgroundImage: `url(../../assets/icons/1-3.png)`}}
                ></Link>
                <Link
                  to="/scene/no.3"
                  styleName="large-button"
                  style={{backgroundImage: `url(../../assets/icons/1-4.png)`}}
                ></Link>
                <Link
                  to="/scene/carriage"
                  styleName="large-button"
                  style={{backgroundImage: `url(../../assets/icons/1-5.png)`}}
                ></Link>
                <Link
                  to="/scene/park"
                  styleName="large-button"
                  style={{backgroundImage: `url(../../assets/icons/1-6.png)`}}
                ></Link>
              </div>
              <div styleName="small-button-wrapper">
                <Link to="" styleName="small-button"
                style={{backgroundImage: `url(../../assets/icons/2-1.png)`}}></Link>
                <Link to="" styleName="small-button"
                style={{backgroundImage: `url(../../assets/icons/2-2.png)`}}></Link>
                <Link to="" styleName="small-button"
                style={{backgroundImage: `url(../../assets/icons/2-3.png)`}}></Link>
                <Link to="" styleName="small-button"
                style={{backgroundImage: `url(../../assets/icons/2-4.png)`}}></Link>
                <Link to="" styleName="small-button"
                style={{backgroundImage: `url(../../assets/icons/2-5.png)`}}></Link>
                <Link to="" styleName="small-button"
                style={{backgroundImage: `url(../../assets/icons/2-6.png)`}}></Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModule(NavigationPage, styles)