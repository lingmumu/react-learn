import React, { Component } from 'react';
import Board from '../Board';
import './index.css';
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ // 包含所用的历史记录
        squares: Array(9).fill(null)
      }],
      xIsNext: true, // 判断哪一方下
      stepNumber: 0 // 走了多少步
    }
  }
  /**
   * 下棋
   * 
   * @param {Number} i 
   */
  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  /**
   * 跳到指定步数
   * 
   * @param {Number} step 
   */
  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #:' + move :
        'Game start'
      return (
        <li key={move}><button onClick={() => this.jumpTo(move)}>{desc}</button></li>
      )
    })
    
    let status
    if (winner) {
      status = `Winner${winner}`
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i) => this.handleClick(i)} squares={current.squares}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

/**
 * 计算哪方赢
 * 
 * @param {Array} squares
 * @returns {String} 返回赢得一方
 */
function calculateWinner (squares) {
  let winner  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  lines.forEach((line, key) => {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a]
    }
  })
  return winner
}
export default Game;