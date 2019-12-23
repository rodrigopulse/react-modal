import React from 'react';
import { render } from 'react-dom';

import './Modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  state = {
    showModal: false
  }
  closeModal = () => {
    this.props.onClose && this.props.onClose();
  }
  render() {
    return (
      <div className={this.props.showModal ? 'modal modal--open' : 'modal'}>
        <div className="modal__conteudo">
          <button onClick={this.closeModal} className="fechar" />
          {this.props.mensagem}
        </div>
      </div>
    )
  }
}
export default Modal;