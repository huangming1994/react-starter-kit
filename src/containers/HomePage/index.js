import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { homePageAction } from './actions'

class HomePage extends Component {
  componentWillMount() {
    this.props.homePageAction('homePage')
  }

  render() {
    return (
      <div>{`this is ${this.props.page}`}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.homePage
  }
}

function mapActionToProps(dispatch) {
  return {
    homePageAction: compose(dispatch, homePageAction)
  }
}

export default connect(mapStateToProps, mapActionToProps)(HomePage)
