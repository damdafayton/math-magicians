import { Routes, Route } from 'react-router-dom';
import './bootstrap/bootstrap.min.css';
import './App.css';
import './style.scss';
import React from 'react';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Quote from './components/Quote';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App container-lg d-flex flex-column align-items-center min-vh-100">
        <NavBar />
        <main className='d-flex flex-grow-1'>
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
