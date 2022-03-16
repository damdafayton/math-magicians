import React from 'react';
import Cell from './Cell';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculateObj: {},
      total: 0,
    };
  }

  handleClick(e) {
    console.log('>> ', this, e.target.firstChild.data);
    let { calculateObj } = this.state;
    const button = e.target.firstChild.data;
    calculateObj = calculate(calculateObj, button);
    const total = calculateObj.total
      ? calculateObj.total + (calculateObj.operation || '') + (calculateObj.next || '')
      : (calculateObj.next || 0);
    this.setState({ total, calculateObj });
    console.log(calculateObj);
  }

  render() {
    const { total } = this.state;
    return (
      <section className="">
        <div className="row text-white text-end">
          <Cell myClass="cell bg-dark fs-3">{total}</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">AC</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">+/-</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">%</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-warning">÷</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">7</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">8</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">9</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-warning">x</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">4</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">5</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">6</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-warning">-</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">1</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">2</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light">3</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-warning">+</Cell>
        </div>
        <div className="row">
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light col-6">0</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-light col-3">.</Cell>
          <Cell handleClick={(e) => this.handleClick(e)} myClass="cell bg-warning col-3">=</Cell>
        </div>
      </section>
    );
  }
}
