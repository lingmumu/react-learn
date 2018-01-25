import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  render() {
    return (
      <div>
        <h3>Todo</h3>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add#{this.state.items.length}
          </button>
        </form>
      </div>
    );
  }

  handleChange (e) {
    this.setState({text: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    if (!this.state.text) {
      return
    }
    const newItems = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState((state, props) => { return { 
      items: state.items.concat(newItems),
      text: ''
     }});
    
  }
}

class  TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
export default TodoApp;