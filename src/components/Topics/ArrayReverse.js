import React, { Component } from 'react';

export default class ArrayReverse extends Component {
  
  constructor() {
    super();

    this.state = {
      userInput: [],
      reverseArray: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  reverse(userInput) {
    let arr = this.state.userInput
	let newArr = []

	for (let i = arr.length-1; i >= 0; i--) {
		newArr.push(arr[i])
	}
	this.setState({ newArr });
  }

  render() {
    return (
      <div className="puzzleBox arrayReverse">
        <h4> Reverse Array </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => { this.reverse(this.state.userInput) }}> Reverse </button>
        <span className="resultsBox"> Reverse: { (this.state.reverseArray) } </span>
      </div>
    )
  }
}
