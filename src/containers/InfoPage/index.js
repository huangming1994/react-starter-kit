import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { infoPageAction } from './actions'

@connect(mapStateToProps, mapDispatchToProps)
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

function mapDispatchToProps(dispatch) {
  return {
    infoPageAction: compose(dispatch, infoPageAction)
  }
}

export default InfoPage
