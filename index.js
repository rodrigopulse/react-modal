import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from './componentes/Modal'
import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <Modal />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
