import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from './componentes/Modal'
import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }
  showModal = e => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  render() {
    return (
      <div className="container">
        <button className="abrir-modal" onClick={this.showModal}>Abrir Modal</button>
        <Modal onClose={this.showModal} showModal={this.state.showModal} mensagem="Mensagem do Modal"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
