import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

export default class CustomLink extends Component {
  render () {
    let {to, normal, active, className} = this.props
    return <Route path={to} exact children={
      ({match}) => <Link
        to={to}
        className={className}
        style={{backgroundImage: `url(${match ? active : normal})`}}
      />
    } />
  }
}
