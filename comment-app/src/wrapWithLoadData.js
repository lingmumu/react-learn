import React, { Component } from 'react';

export default (WrappedComponent, name) => {
  class LocalStorageActions extends Component {
    state = {
      data: ''
    }
    componentWillMount () {
      const data = window.localStorage.getItem(name)
      this.setState({
        data: typeof data === 'object' ? JSON.parse(data) : data
      })
    }
    saveData = data => {
      if (typeof data === 'object') {
        data = JSON.stringify(data)
      }
      window.localStorage.setItem(name, data)
    }
    render () {
      return (<WrappedComponent data={this.state.data} onSave={this.saveData}/>)
    }
  }
  return LocalStorageActions
}