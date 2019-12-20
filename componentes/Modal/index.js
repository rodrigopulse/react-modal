import React from 'react';
import { render } from 'react-dom';

import './Modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal">
        <div className="modal__conteudo">
          <button href="#" className="fechar" />
          Conteúdo do modal
        </div>
      </div>
    )
  }
}
export default Modal;