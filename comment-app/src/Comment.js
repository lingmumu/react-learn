import React, { Component } from 'react';

class Comment extends Component {
  state = {
    timeString: ''
  }
  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(() => {
      this._updateTimeString()
    }, 5000)
  }
  componentWillUnmount () {
    clearInterval(this._timer)
  }
  _updateTimeString = () => {
    const {createdTime} = this.props.comment
    const duration = (+Date.now() - createdTime) / 1000
    this.setState({
      timeString: duration > 60 ? 
        `${Math.round(duration / 60)} 分钟`:
        `${Math.round(Math.max(duration, 1))}秒`
    })
  }
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.id)
    }
  }
  _getProcessedContent = content => {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  render() {
    const {username, content} = this.props.comment
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span className="comment-username">{username}</span>：
        </div>
        <p dangerouslySetInnerHTML={{
          __html: this._getProcessedContent(content)
        }}></p>
        <span className="comment-createdtime">{this.state.timeString}</span>
        <span className="comment-delete" onClick={this.handleClick}>删除</span>
      </div>
    );
  }
}

export default Comment;