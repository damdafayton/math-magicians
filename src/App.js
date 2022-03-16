// import logo from './logo.svg';
import './bootstrap/bootstrap.min.css';
import './App.css';
import './style.scss';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App container">
        <header className="" />
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
