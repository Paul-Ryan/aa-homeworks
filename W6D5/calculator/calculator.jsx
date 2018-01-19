import React from 'react';

class Calculator extends React.Component{
  constructor(){
    super();
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    // const num2 = e.target.value ? parseInt(e.target.value) : "";
    const num2 = parseInt(e.target.value);

  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value=""/>
        <input onChange={this.setNum2} value=""/>
      </div>
    );
  }
}

export default Calculator;
