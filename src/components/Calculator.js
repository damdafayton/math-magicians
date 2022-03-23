import React, { useState } from 'react';
import Cell from './Cell';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [total, setTotal] = useState('0');
  const [calculateObj, setCalculateObj] = useState({});

  function handleClick(e) {
    const button = e.target.firstChild.data;
    const calculateResult = calculate(calculateObj, button);
    const { total, next, operation } = calculateResult;
    const newTotal = total
      ? total + (operation || '') + (next || '')
      : (next || 0);
    setCalculateObj(calculateResult);
    setTotal(newTotal);
  }

  return (
    <div className="row flex-sm-grow-1">
      <p className="col-sm-4 text-start">
        Let&apos;s do some math!
      </p>
      <section className="col-sm-8 px-4">
        <div className="row text-white text-end">
          <Cell id="calculate-result" myClass="py-3 bg-dark fs-3">{total.toString()}</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">AC</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">+/-</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">%</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-warning">÷</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">7</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">8</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">9</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-warning">x</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">4</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">5</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">6</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-warning">-</Cell>
        </div>
        <div className="row row-cols-4">
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">1</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">2</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light">3</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-warning">+</Cell>
        </div>
        <div className="row">
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light col-6">0</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-light col-3">.</Cell>
          <Cell handleClick={(e) => handleClick(e)} myClass="cell bg-warning col-3">=</Cell>
        </div>
      </section>
    </div>
  );
}
