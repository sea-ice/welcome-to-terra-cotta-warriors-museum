import React, {Component} from 'react'
import Loadable from 'react-loadable'
import CSSModule from 'react-css-modules'

import styles from '../../../../../assets/css/Common.css'

export default Loadable({
  loader: () => import('./Consult'),
  loading: CSSModule(() => <div styleName="loading">Loading</div>, styles)
})
