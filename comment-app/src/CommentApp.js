import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import wrapWithLoadData from './wrapWithLoadData'
class CommentApp extends Component {
  static propTypes = {
    data: PropTypes.array,
    onSave: PropTypes.func.isRequired
  }
  state = {
    comments: this.props.data || []
  }
  handleSubmitComment = (comment) => {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.setState({
      comments: [
        ...this.state.comments,
        comment
      ]
    })
  }
  handleDeleteComment = index => {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({
      comments: comments
    })
  }
  componentDidUpdate () {
    this.props.onSave(this.state.comments)
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment}/>
        <CommentList comments={this.state.comments} onClick={this.handleDeleteComment}/>
      </div>
    );
  }
}
CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp;