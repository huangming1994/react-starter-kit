import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { infoPageAction } from './actions'

class InfoPage extends Component {
  componentWillMount() {
    this.props.infoPageAction('infoPage')
  }

  render() {
    return (
      <div>{`this is ${this.props.page}`}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.infoPage
  }
}

function mapActionToProps(dispatch) {
  return {
    infoPageAction: compose(dispatch, infoPageAction)
  }
}

export default connect(mapStateToProps, mapActionToProps)(InfoPage)
