import React from 'react';

import Cell from './Cell';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <div className="text-white text-end">
          <Cell myClass="cell bg-dark fs-3">0</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell myClass="cell bg-light">AC</Cell>
          <Cell myClass="cell bg-light">+/-</Cell>
          <Cell myClass="cell bg-light">%</Cell>
          <Cell myClass="cell bg-warning">÷</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell myClass="cell bg-light">7</Cell>
          <Cell myClass="cell bg-light">8</Cell>
          <Cell myClass="cell bg-light">9</Cell>
          <Cell myClass="cell bg-warning">x</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell myClass="cell bg-light">4</Cell>
          <Cell myClass="cell bg-light">5</Cell>
          <Cell myClass="cell bg-light">6</Cell>
          <Cell myClass="cell bg-warning">-</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell myClass="cell bg-light">1</Cell>
          <Cell myClass="cell bg-light">2</Cell>
          <Cell myClass="cell bg-light">3</Cell>
          <Cell myClass="cell bg-warning">+</Cell>
        </div>
        <div className="row">
          <Cell myClass="cell bg-light col-6">0</Cell>
          <Cell myClass="cell bg-light col-3">.</Cell>
          <Cell myClass="cell bg-warning col-3">=</Cell>
        </div>
      </div>
    );
  }
}
